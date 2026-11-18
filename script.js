const tests = [
 {title:"Test 1 — Choose A, AN or THE",description:"Choose the correct article.",questions:[
 {q:"I have ___ dog.",options:["a","an","the"],answer:0},{q:"She eats ___ apple every day.",options:["a","an","the"],answer:1},{q:"___ sun is hot.",options:["A","An","The"],answer:2},{q:"He is ___ teacher.",options:["a","an","the"],answer:0},{q:"This is ___ orange.",options:["a","an","the"],answer:1},{q:"I see a cat. ___ cat is black.",options:["A","An","The"],answer:2},{q:"He has ___ umbrella.",options:["a","an","the"],answer:1},{q:"She is ___ doctor.",options:["a","an","the"],answer:0},{q:"This is ___ book I told you about.",options:["a","an","the"],answer:2},{q:"He is ___ honest man.",options:["a","an","the"],answer:1}]},
 {title:"Test 2 — Fill in the blanks",description:"Choose the correct option to complete each sentence.",questions:[
 {q:"I have ___ pencil.",options:["a","an","the"],answer:0},{q:"She is ___ English teacher.",options:["a","an","the"],answer:1},{q:"___ moon is beautiful tonight.",options:["A","An","The"],answer:2},{q:"He eats ___ banana.",options:["a","an","the"],answer:0},{q:"We drink ___ water every day.",options:["a","an","— (no article)"],answer:2},{q:"This is ___ old house.",options:["a","an","the"],answer:1},{q:"I see ___ bird. ___ bird is blue.",options:["a / The","an / A","the / An"],answer:0},{q:"My father is ___ driver.",options:["a","an","the"],answer:0},{q:"They like ___ music.",options:["a","an","— (no article)"],answer:2},{q:"She has ___ new phone.",options:["a","an","the"],answer:0}]},
 {title:"Test 3 — Correct the mistakes",description:"Choose the correctly written sentence.",questions:[
 {q:"She has a apple.",options:["She has a apple.","She has an apple.","She has the apple. (first mention)"],answer:1},{q:"He is an student.",options:["He is a student.","He is an student.","He is student."],answer:0},{q:"I see an dog.",options:["I see an dog.","I see a dog.","I see the dog. (first mention)"],answer:1},{q:"She is teacher.",options:["She is teacher.","She is the teacher. (unknown)","She is a teacher."],answer:2},{q:"He has a umbrella.",options:["He has an umbrella.","He has a umbrella.","He has umbrella."],answer:0},{q:"I like the cats. (general meaning)",options:["I like a cats.","I like cats.","I like an cats."],answer:1},{q:"This is an book.",options:["This is a book.","This is an book.","This is book."],answer:0},{q:"He is a actor.",options:["He is a actor.","He is an actor.","He is actor."],answer:1},{q:"I drink a water.",options:["I drink an water.","I drink a water.","I drink water."],answer:2},{q:"I have a bag. A bag is red.",options:["I have a bag. The bag is red.","I have the bag. A bag is red.","I have a bag. A bag red."],answer:0}]},
 {title:"Test 4 — Translate into English",description:"Choose the correct English translation.",questions:[
 {q:"Mən bir kitab istəyirəm.",options:["I want book.","I want a book.","I want the books."],answer:1},{q:"O, həkimdir.",options:["He is doctor.","He is an doctor.","He is a doctor."],answer:2},{q:"Mən bir alma yeyirəm.",options:["I eat an apple.","I eat a apple.","I eat the apples."],answer:0},{q:"Günəş istidir.",options:["A sun is hot.","The sun is hot.","Sun is a hot."],answer:1},{q:"Mənim bir itim var. Həmin it böyükdür.",options:["I have dog. Dog is big.","I have a dog. The dog is big.","I have the dog. A dog is big."],answer:1},{q:"O, bir çətir alır.",options:["She buys an umbrella.","She buys a umbrella.","She buys the umbrella. (unspecified)"],answer:0},{q:"Masanın üstündə bir yumurta var.",options:["There is a egg on table.","There is an egg on the table.","There is the egg on table."],answer:1},{q:"Mən musiqini sevirəm. (ümumi)",options:["I like a music.","I like the music. (specific)","I like music."],answer:2},{q:"O, bir mühəndisdir.",options:["He is an engineer.","He is a engineer.","He is engineer."],answer:0},{q:"Bu, mənim gördüyüm evdir.",options:["This is a house I saw.","This is an house I saw.","This is the house I saw."],answer:2}]},
 {title:"Test 5 — Choose the correct sentence",description:"Select the grammatically correct option.",questions:[
 {q:"Choose the correct sentence:",options:["She is an teacher.","She is a teacher.","She is teacher."],answer:1},{q:"Choose the correct sentence:",options:["I have an book.","I have a book.","I have the books. (one book)"],answer:1},{q:"Choose the correct sentence:",options:["He eats a orange.","He eats an orange.","He eats the orange. (first mention, non-specific)"],answer:1},{q:"Choose the correct sentence:",options:["The moon is bright.","A moon is bright. (our moon)","An moon is bright."],answer:0},{q:"Choose the correct sentence (general meaning):",options:["I like the dogs.","I like dogs.","I like a dogs."],answer:1},{q:"Choose the correct sentence:",options:["She has an umbrella.","She has a umbrella.","She has umbrella."],answer:0},{q:"Choose the correct sentence:",options:["He is an university student.","He is a university student.","He is university student."],answer:1},{q:"Choose the correct sentence:",options:["It takes a hour.","It takes an hour.","It takes the hour. (duration)"],answer:1},{q:"Choose the correct sentence:",options:["The books are on the table. (specific books)","A books are on the table.","An books are on the table."],answer:0},{q:"Choose the correct sentence:",options:["I need an water.","I need a water. (general)","I need water."],answer:2}]}
];

const testContainer=document.getElementById("test-container");
tests.forEach((test,testIndex)=>{
 const card=document.createElement("div");card.className="test-card";
 const header=document.createElement("div");header.className="test-header";
 header.innerHTML=`<h3>${test.title}</h3><p>${test.description} • ${test.questions.length} questions</p>`;
 const body=document.createElement("div");body.className="test-body";
 test.questions.forEach((question,questionIndex)=>{
  const questionDiv=document.createElement("div");questionDiv.className="question";
  const optionsHTML=question.options.map((option,optionIndex)=>`<label class="option" data-option="${optionIndex}"><input type="radio" name="test-${testIndex}-question-${questionIndex}" value="${optionIndex}"><span>${option}</span></label>`).join("");
  questionDiv.innerHTML=`<div class="question-title">${questionIndex+1}. ${question.q}</div><div class="options">${optionsHTML}</div>`;
  body.appendChild(questionDiv);
 });
 const actions=document.createElement("div");actions.className="test-actions";
 actions.innerHTML='<button class="btn btn-primary submit-test">Submit Test</button><button class="btn btn-secondary retry-test">Retry</button>';
 const result=document.createElement("div");result.className="result";
 body.append(actions,result);card.append(header,body);testContainer.appendChild(card);
 const submit=card.querySelector(".submit-test"),retry=card.querySelector(".retry-test");
 submit.addEventListener("click",()=>{
  let score=0,answered=0;
  test.questions.forEach((question,questionIndex)=>{
   const selected=card.querySelector(`input[name="test-${testIndex}-question-${questionIndex}"]:checked`);
   const labels=card.querySelectorAll(`.question:nth-child(${questionIndex+1}) .option`);
   labels.forEach((label,optionIndex)=>{
    label.classList.remove("correct-answer","wrong-answer");
    label.classList.add("disabled");
    if(optionIndex===question.answer)label.classList.add("correct-answer");
   });
   if(selected){answered++;if(Number(selected.value)===question.answer)score++;else selected.closest(".option").classList.add("wrong-answer");}
  });
  const pct=Math.round(score/test.questions.length*100);
  result.className="result show "+(pct>=80?"good":pct>=50?"average":"bad");
  result.innerHTML=`<strong>Result: ${score} / ${test.questions.length}</strong><br>Score: ${pct}%<br>Answered: ${answered} / ${test.questions.length}<br>${pct>=80?"Excellent! Great job! 🎉":pct>=50?"Good effort! Review the lesson and try again. 💪":"Keep practicing! Review the lesson and retry. 📚"}`;
  submit.disabled=true;submit.style.opacity=".6";submit.style.cursor="not-allowed";
 });
 retry.addEventListener("click",()=>{
  card.querySelectorAll('input[type="radio"]').forEach(input=>input.checked=false);
  card.querySelectorAll(".option").forEach(label=>label.classList.remove("correct-answer","wrong-answer","disabled"));
  result.className="result";result.innerHTML="";
  submit.disabled=false;submit.style.opacity="1";submit.style.cursor="pointer";
 });
});
