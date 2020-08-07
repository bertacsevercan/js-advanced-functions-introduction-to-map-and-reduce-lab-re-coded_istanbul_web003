// Your code here
function mapToNegativize(sourceArray){
    const newArr = []
    for(const el of sourceArray){
        newArr.push(el * -1)
    }
    return newArr;
}
function mapToNoChange(sourceArray){
    return sourceArray
    
}
function mapToDouble(sourceArray){
    const newArr = []
    for(const el of sourceArray){
        newArr.push(el * 2)
    }
    return newArr;
}
function mapToSquare(sourceArray){
    const newArr = []
    for(const el of sourceArray){
        newArr.push(el ** 2)
    }
    return newArr;
    
}
function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint;
    for(let el of sourceArray){
        total += el;
    }
    return total
}
function reduceToAllTrue(sourceArray){
    let sentinal = false;
    for(const el of sourceArray){
        if(el){
            sentinal = true;
        }
        else{
            return false
        }   
    }
    return sentinal
    
}
function reduceToAnyTrue(sourceArray){
    let sentinal = true;
    for(const el of sourceArray){
        if(!el){
            sentinal = false;
        }
        else{
            return true
        }   
    }
    return sentinal
    
}