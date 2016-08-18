Incremental fluids - Extempore
==============================

The idea of this project is to show off the capabilities of Extempore in a scientific environment. It can be used to change anything from variables such as fluid density to the way in which the code actually solves the pressure equations. The Incremental Fluids have been re-written in xtlang and most of the different solvers have been used to show a possible use for extempore. The original documentation explaining the solvers has been left in each folder. This project was also useful in finding areas in the documentation that are require more information for people learning to use extempore.

**Examples:**
  #### 1 - Matrixless

  This is a very basic solver which introduces the use of using extempore to change all of the characteristics of the fluid and the inflow during run time. The density of the fluid can be changed, and so can the accuracy of the simulation by altering the length of each step through time.

  #### 2 - Better-Advection

  This slightly more complex solver is used in the Swapping Solvers example to show how Extempore can swap between using the two different solvers during runtime.

  #### 4 - Solid Bodies

  This solver introduces other bodies to the simulation and the shape and size of these bodies can be changed in the middle of a simulation. Solid Bodies also introduces the function 'setBoundaryCondition' which is an easy way to see how the solver can be changed during run time. The solver sets boundary conditions by pretending solving the pressure equations as if the body was moving in some direction (a feature that wasn't implemented because it is very computationally intensive). So you can change this function to solve the equation as it the boundary was moving towards or away from the fluid to make the fluid bounce ot stick to the body without the body actually moving.

  #### 5 - Curved Boundaries

  As well as having more accurate solver for when the fluid hits solid bodies, the body can also be moved around the screen using the arrow keys. The speed at which it moves can be changed at run time.

  #### 6 - Heat

  In this example, you can add either heat or fluid using the cursor. The amount of heat added or the characteristics of the fluid added can be varied during runtime.

  Ultimately, the point of this project was to show the flexibility of the extempore code, as opposed to any other language. While many of these features could be impleneted in many languages, by using extempore, anything from changing trivial things, like arbritarily set values used by the simulation, to fundamental things about how the solver works can be changed on the fly, often very easily.

  The ability to do things like this can also be very helpful in creating the code. Especially in a situation like Fluid Dynamics, it is very useful to be able to change an aspect of the code and see immediately if the change has resulted in a more realistic simulation. While the compile time for a project this small isn't very long, for larger projects, it could be very useful to be able to change a small part of the code and see the effects without having to recompile the entire project.
