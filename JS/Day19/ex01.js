function printMultiplicationTable (n) {
    for (let i = 1; i <= n; i++) {
        console.log(`Bảng cửu chương ${i}`)
        for (let j = 1; j <= n ;j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

printMultiplicationTable(10);

