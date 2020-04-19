const CREW_CREATOR = "Creator";

export default (showCrew) => {
    const crewCreator = showCrew.find((crewMember) => crewMember.type === CREW_CREATOR);
    return crewCreator ? crewCreator.person.name: "";
}
