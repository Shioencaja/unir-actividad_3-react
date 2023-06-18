type question = {
  q: string;
  answers: [
    {
      text: string;
      is_correct: boolean;
    }
  ];
};

export default question;
