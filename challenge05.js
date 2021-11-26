const addJobToAstronaut = (astronaut, job) => {
  let newAstronaut = {...astronaut};
  newAstronaut.job = job;
  return newAstronaut;
}
