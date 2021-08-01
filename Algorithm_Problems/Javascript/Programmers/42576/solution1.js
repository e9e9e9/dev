function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (const idx in participant) {
        if (participant[idx] !== completion[idx])
            return participant[idx];
    }
}