const bus = {
    id: 'bus',
    title: 'Boarding the Bus'
    image:
    audio:
    description: `
    The bus pulls up and there are a bunch of people standing right by the door who could easily move back but aren't. What do you do?
    `,
    choices: [{
        id: 'squeeze in',
        description: 'Make yourself small and wedge your way in',
        result: `
            Not wanting to make a fuss in true Oregonian style, you compress each molecule as small as you can and wedge yourself in next to the Hop machine. 
        `,
        politeness: 25,
        comfort: 0
    }, {
        id: 'yell',
        description: 'Scream at people to move',
        result: `
            You yell at everyone to move back until they reluctantly shuffle back, leaving you in royal comfort near the front with two straps to hold onto.
        `,
        politeness: 0,
        comfort: 25
    }, {
        id: 'wait',
        description: 'Wait for the next bus',
        result: `
            You wait for the next bus despite the fact that it is raining and there is no shelter. The bus is 30 minutes late and you are late to work.
        `,
        politeness: 5,
        comfort: 0
    }]

}