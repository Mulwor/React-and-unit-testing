import { StudentType } from "../2. Object/01.About_me";
import { CityType, HouseType, GovernmentBuildingType } from "../2. Object/02.Building";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudnetLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}
