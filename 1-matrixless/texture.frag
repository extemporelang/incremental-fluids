#version 330

in vec2 tex_coord;
out vec4 frag_colour;

uniform sampler2D tex;

vec3 HUEtoRGB(float H){
  float R = 2 - abs(H * 6. - 3.);
  float G = 2 - abs(H * 6. - 2.);
  float B = 2 - abs(H * 6. - 4.);
  return clamp(vec3(R,G,B),0.0,1.0);
}

vec3 HSLtoRGB(vec3 HSL){
  vec3 RGB = HUEtoRGB(HSL.x);
  float C = (1. - abs(2. * HSL.z - 1.)) * HSL.y;
  return (RGB - 0.5) * C + HSL.z;
}

void main () {
  frag_colour = vec4(HUEtoRGB(1.0*texture(tex, tex_coord).x), 1.0);
}
