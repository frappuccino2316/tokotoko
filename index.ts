const index = () => {
  const first = `
  　　　∧＿∧
  　 （　´∀｀）
  　 （　　　　）
  　　人　 Ｙ
  　　し （＿）`;

  const second = `
  　　 ∧＿∧
  　（　´∀｀）
  　（　　 　 ）
  　人　　Y
  　し （＿）`;

  (async () => {
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
    await sleep(1000);
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
    await sleep(1000);
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
    await sleep(1000);
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
    await sleep(1000);
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
    await sleep(1000);
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
    await sleep(1000);
    console.clear();
    console.log(first);
    await sleep(1000);
    console.clear();
    console.log(second);
  })();
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

index();
