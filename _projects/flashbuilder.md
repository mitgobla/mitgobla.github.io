---
layout: project
title: FLASH Builder
description: Allows you to build models to print on a LEGO 3D Printer. This was made after winning the 2018 Technocamps Live Challenge.
image: /assets/images/projects/flashbuilder.png
date: 2018-10-16
tags: [python]
links:
    - title: Repository
      icon: bi-github
      url: https://github.com/mitgobla/Flash-Builder
---

![Logo](/assets/images/projects/flashbuilder/flash-software-128.png)

## Creation Edition

Creation Edition for FLASH Modelling software. Allows you to build models to print on a LEGO 3D Printer.

## The Software

Keeping with the theme of lightning, I called it FLASH. It's also down to how fast and easy it is to create simple models to be printed.

![GIF of Software](/assets/images/projects/flashbuilder/flash-1.gif "FLASH Software Preview")

You'll notice that there are 5 estimated instructions even though no bricks have been placed. As default, the printer will add instructions to home itself and calibrate each axis. This was done using LEGO EV3 Press sensors.

### Features

- 3 colours of bricks avaliable
- Model saving and loading using JSON
- Preview Window Dark Mode
- Model Validation. This includes:
  - prevention of building bricks outside grid area
  - resize grid if imported model is too large for current settings
  - prevention of building bricks inside one another
  - prevention of building floating bricks

![Image of Model in Software](/assets/images/projects/flashbuilder/flash-2.PNG "FLASH Model Preview")

### Controls

```none
A-D Keys: Move placer on the X-Axis
W-S Keys: Move placer on the Y-Axis
Q-E Keys: Move placer on the Z-Axis
Spacebar: Place brick at placer position
X Key: Delete brick at placer position

1 Key: Select Red brick
2 Key: Select Blue brick
3 Key: Select Yellow brick
```

## Thank you

I just want to say thank you to some people who have made this possible:

**Edward Upton** ([engiego](http://github.com/engiego)) for the collaboration, testing, and ideas for the software.

**Thomas Woodthorpe** ([https://lonewolfdesign.co.uk](https://lonewolfdesign.co.uk)) for testing the code from the start till the end, and creating models during the competiton.

**Team Lightning** crew for creating the printer idea and building it, and being successful in the Technocamps competition.

## More Photos

![Image of First Software Developemt](/assets/images/projects/flashbuilder/original-software.png "Original Development of the software")

This is the first development of the FLASH software that we used after the competition.

![Image of Brick Cartridges](/assets/images/projects/flashbuilder/printer-cartridges.png "Printer Cartridges")

These are the printer LEGO Brick Cartridges. Each brick instruction also adds an instruction to go to the brick dispenser to pick up a new brick.

![GIF of Printer in action](/assets/images/projects/flashbuilder/printer-working.gif "Printer in action")

Programmed with synchronous axis movement. You can see the original string method we used to move the print bed.

![GIF of Printer placing brick](/assets/images/projects/flashbuilder/printer-place-brick.gif "Printer placing brick")

The first development of the printer had problems with the print head slipping when it placed bricks. However, we managed to get the final model to place bricks without requiring a motor to press it on to the plate.

![Photo of Y & Z axis mechanics](/assets/images/projects/flashbuilder/printer-mechanics.png "Printer Mechanics")

Final Model Y & Z axis mechanics built by Edward.

![GIF of Printer movement](/assets/images/projects/flashbuilder/printer-movement.gif "Printer Movement")

More synchronous movement.
