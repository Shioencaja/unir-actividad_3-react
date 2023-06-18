const data = {
  questions: [
    {
      q: "¿Cuánto es 2 + 2?",
      answers: [
        {
          text: "4",
          is_correct: true,
        },
        {
          text: "3",
          is_correct: false,
        },
        {
          text: "999",
          is_correct: false,
        },
        {
          text: "5",
          is_correct: false,
        },
      ],
    },
    {
      q: '¿Cuántas letras tiene la palabra "Banana"?',
      answers: [
        {
          text: "5",
          is_correct: false,
        },
        {
          text: "7",
          is_correct: false,
        },
        {
          text: "6",
          is_correct: true,
        },
        {
          text: "12",
          is_correct: false,
        },
      ],
    },
    {
      q: "¿Cuál es la primera letra del abecedario?",
      answers: [
        {
          text: "e",
          is_correct: false,
        },
        {
          text: "a",
          is_correct: true,
        },
        {
          text: "i",
          is_correct: false,
        },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 2,
      title: "¡Uy! No te rindas",
      desc: "Sigue estudiando y lo lograrás",
    },
    {
      min: 3,
      max: 3,
      title: "¡Felicidades! Lo lograste",
      desc: "Haz logrado responder todas las preguntas correctamente",
    },
  ],
};

export default data;
