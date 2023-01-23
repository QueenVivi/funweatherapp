import axios from "axios";

const weather = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const apiUrl = "http://api.weatherapi.com/v1/current.json";

  const response = await axios.get(apiUrl, {
    params: {
      key: apiKey,
      q: req.query.q,
    },
  });
  res.status(200).send(response.data);
};

export default weather;
