
console.log("");
console.log("STEP 2");
console.log("");


const watchFirstEpisode = function() {
    //Stack: [finishMondayEvening, watchBreakingBad, watchFirstEpisode]
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
    //Stack: [finishMondayEvening, watchBreakingBad]
    watchFirstEpisode();
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    // draw call stack
    //Stack: [finishMondayEvening]
    goForARun();
    //Stack: [finishMondayEvening]
    helpStudentsWithHomework();
    //Stack: [finishMondayEvening]
    console.log('done for today')
  }
  
  //Stack: []
  finishMondayEvening(watchBreakingBad);
  //Stack: []