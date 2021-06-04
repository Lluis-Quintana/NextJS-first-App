// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    userName: 'Lluís Quintana',
    data: 'Just a random text to test'
  });
};
