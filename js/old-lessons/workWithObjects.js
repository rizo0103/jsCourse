"use strict";

const personalPlanPeter = {
    experience: '1 month',
    programmingLags: {
        'js': '20%',
        'php': '10%',
    },
    age: 29,
    langs: ['RU', 'ENG'],
    showAgeAndLangs: function(obj) {
        let languages = `${obj.langs[0]}`;
        for (let i = 1; i < obj.langs.length; ++i) {
            languages += ` ${obj.langs[i]}`;
        }

        return `Мне ${obj.age} и я владею языками: ${languages}`;
    },
};

const showExperience = (object) => {
    const { experience } = object;

    return experience;
};

showExperience(personalPlanPeter);

const showProgrammingLangs = (object) => {
    const { programmingLags } = object;
    let str = '';

    for (let key in programmingLags) {
        str += `Язык программирования ${key} изучен на ${programmingLags[key]}\n`;
    }

    return str;
};

showProgrammingLangs(personalPlanPeter);
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
