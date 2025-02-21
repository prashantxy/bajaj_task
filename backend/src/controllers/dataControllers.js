export class DataController {
  processData(req, res) {
    try {
      const { data } = req.body;

      if (!Array.isArray(data)) {
        return res.status(400).json({
          is_success: false,
          numbers: [],
          alphabets: [],
          highest_alphabet: []
        });
      }

      const numbers = [];
      const alphabets = [];

      data.forEach(item => {
        if (/^\d+$/.test(item)) {
          numbers.push(item);
        } else if (/^[A-Za-z]$/.test(item)) {
          alphabets.push(item);
        }
      });

      const highest_alphabet = alphabets.length > 0 
        ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)]
        : [];

      return res.status(200).json({
        is_success: true,
        numbers,
        alphabets,
        highest_alphabet
      });
    } catch (error) {
      return res.status(500).json({
        is_success: false,
        numbers: [],
        alphabets: [],
        highest_alphabet: []
      });
    }
  }

  getOperationCode(req, res) {
    return res.status(200).json({ operation_code: 1 });
  }
}
