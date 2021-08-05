function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let weightOnBridge = 0;
    const onBridge = [];
    let idx = 0;
    
    while(idx < truck_weights.length) {
        const target_weight = truck_weights[idx];
        
        while (true) {
            if (onBridge.length < bridge_length) {
                if (weightOnBridge + target_weight <= weight) {
                    onBridge.push(target_weight);
                    weightOnBridge += target_weight;
                    idx++;
                    answer++;
                    break;
                } else {
                    onBridge.push(0);
                    answer++;
                }
            } else {
                weightOnBridge -= onBridge.shift();;
            }
        }
        if (idx > truck_weights.length - 1) {
            answer += bridge_length;
        }
    }
    return answer;
}