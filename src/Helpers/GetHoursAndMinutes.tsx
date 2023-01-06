


export const getHoursAndMinutes=(timeString: String)=>{
    
    // Split the time string into hours and minutes
    const timeParts = timeString.split(":");
    
    // Extract the hours and minutes from the time parts
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    
    // Return the hours and minutes as an object
    return { hours, minutes };
      
}

 