function generateRandomArray(size, minVal, maxVal) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
}


function splitArray(arr) {
    let even = [];
    let odd = [];
    arr.forEach((num, index) => {
        if (index % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num); 
        }
    });
    return { even, odd };
}


function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}


function calculateAverage(arr) {
    return calculateTotal(arr) / arr.length;
}


function compareArrays(even, odd) {
    const comparisons = [];

   
    const minEven = findMin(even);
    const minOdd = findMin(odd);
    if (minEven > minOdd) {
        comparisons.push("Nilai minimum lebih besar pada array genap");
    } else if (minEven < minOdd) {
        comparisons.push("Nilai minimum lebih besar pada array ganjil");
    } else {
        comparisons.push("Nilai minimum sama untuk kedua array");
    }

   
    const maxEven = findMax(even);
    const maxOdd = findMax(odd);
    if (maxEven > maxOdd) {
        comparisons.push("Nilai maksimum lebih besar pada array genap");
    } else if (maxEven < maxOdd) {
        comparisons.push("Nilai maksimum lebih besar pada array ganjil");
    } else {
        comparisons.push("Nilai maksimum sama untuk kedua array");
    }

   
    const totalEven = calculateTotal(even);
    const totalOdd = calculateTotal(odd);
    if (totalEven === totalOdd) {
        comparisons.push("Total nilai sama antara array genap dan ganjil");
    } else if (totalEven > totalOdd) {
        comparisons.push("Total nilai lebih besar pada array genap");
    } else {
        comparisons.push("Total nilai lebih besar pada array ganjil");
    }

  
    const avgEven = calculateAverage(even);
    const avgOdd = calculateAverage(odd);
    if (avgEven > avgOdd) {
        comparisons.push("Rata-rata lebih besar pada array genap");
    } else if (avgEven < avgOdd) {
        comparisons.push("Rata-rata lebih besar pada array ganjil");
    } else {
        comparisons.push("Rata-rata sama untuk kedua array");
    }

    return comparisons;
}


function updateUI(original, even, odd) {
    
    document.getElementById('originalArray').textContent = JSON.stringify(original, null, 2);
    document.getElementById('evenArray').textContent = JSON.stringify(even, null, 2);
    document.getElementById('oddArray').textContent = JSON.stringify(odd, null, 2);

    
    const evenStats = {
        "Minimum": findMin(even),
        "Maksimum": findMax(even),
        "Total": calculateTotal(even),
        "Rata-rata": calculateAverage(even).toFixed(2)
    };

   
    const oddStats = {
        "Minimum": findMin(odd),
        "Maksimum": findMax(odd),
        "Total": calculateTotal(odd),
        "Rata-rata": calculateAverage(odd).toFixed(2)
    };

 
    document.getElementById('evenStats').innerHTML = Object.entries(evenStats)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join('');

   
    document.getElementById('oddStats').innerHTML = Object.entries(oddStats)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join('');

  
    const comparisons = compareArrays(even, odd);
    const comparisonsList = document.getElementById('comparisons');
    comparisonsList.innerHTML = comparisons
        .map(comparison => `<div class="comparison-item fade-in">${comparison}</div>`)
        .join('');
}


function generate() {
    const originalArray = generateRandomArray(100, 1, 50); 
    const { even, odd } = splitArray(originalArray);
    updateUI(originalArray, even, odd);
}


document.getElementById('generate').addEventListener('click', generate);
generate();
