export const stationsData = {
    "Agra Cantonment": {
      name: "Agra Cantonment",
      code: "AGC",
      location: "Agra, Uttar Pradesh",
      trains: [
        { name: "Gatimaan Express", number: "12049", time: "10:00 AM", destination: "New Delhi" },
        { name: "Taj Express", number: "12280", time: "07:30 AM", destination: "New Delhi" },
        { name: "Bhopal Shatabdi", number: "12002", time: "08:00 AM", destination: "Bhopal" },
        { name: "Jhansi Express", number: "12345", time: "12:00 PM", destination: "Jhansi" }
      ],
    },
    "New Delhi": {
      name: "New Delhi",
      code: "NDLS",
      location: "New Delhi, Delhi",
      trains: [
        { name: "Rajdhani Express", number: "12952", time: "05:00 PM", destination: "Mumbai Central" },
        { name: "Duronto Express", number: "12275", time: "11:30 PM", destination: "Howrah" },
        { name: "Jammu Tawi Express", number: "14033", time: "06:00 AM", destination: "Jammu Tawi" },
        { name: "Taj Express", number: "12280", time: "11:00 AM", destination: "Agra Cantonment" }
      ],
    },
    "Bhopal": {
      name: "Bhopal",
      code: "BPL",
      location: "Bhopal, Madhya Pradesh",
      trains: [
        { name: "Bhopal Shatabdi", number: "12002", time: "08:00 AM", destination: "Agra Cantonment" },
        { name: "Rajdhani Express", number: "12953", time: "10:30 AM", destination: "New Delhi" },
        { name: "Gorakhpur Express", number: "12555", time: "04:00 PM", destination: "Gorakhpur" }
      ],
    },
    "Mumbai Central": {
      name: "Mumbai Central",
      code: "BCT",
      location: "Mumbai, Maharashtra",
      trains: [
        { name: "Rajdhani Express", number: "12951", time: "07:00 AM", destination: "New Delhi" },
        { name: "Duronto Express", number: "12239", time: "09:00 AM", destination: "Kolkata" },
        { name: "Bhopal Express", number: "12155", time: "05:30 PM", destination: "Bhopal" }
      ],
    },
    "Howrah": {
      name: "Howrah",
      code: "HWH",
      location: "Howrah, West Bengal",
      trains: [
        { name: "Duronto Express", number: "12275", time: "11:30 PM", destination: "New Delhi" },
        { name: "Sealdah Rajdhani", number: "12313", time: "06:05 PM", destination: "Sealdah" },
        { name: "Jnaneswari Express", number: "12101", time: "02:30 PM", destination: "Mumbai" }
      ],
    },
    "Jammu Tawi": {
      name: "Jammu Tawi",
      code: "JAT",
      location: "Jammu, Jammu & Kashmir",
      trains: [
        { name: "Jammu Tawi Express", number: "14033", time: "06:00 AM", destination: "New Delhi" },
        { name: "Shri Shakti Express", number: "22461", time: "09:30 PM", destination: "Katra" },
        { name: "Udhampur Express", number: "11078", time: "08:45 AM", destination: "Udhampur" }
      ],
    },
    "Chennai Central": {
      name: "Chennai Central",
      code: "MAS",
      location: "Chennai, Tamil Nadu",
      trains: [
        { name: "Chennai Express", number: "12655", time: "08:00 AM", destination: "Mumbai Central" },
        { name: "Coromandel Express", number: "12841", time: "02:30 PM", destination: "Howrah" },
        { name: "Tamil Nadu Express", number: "12621", time: "10:30 PM", destination: "New Delhi" }
      ],
    },
    "Agartala Railway Station": {
        name: "Agartala Railway Station",
        code: "AGTL",
        location: "Agartala, Tripura",
        trains: [
          { name: "Kanchanjunga Express", number: "13175", time: "06:00 AM", destination: "Sealdah" },
          { name: "Tripura Sundari Express", number: "14620", time: "08:00 PM", destination: "Delhi" }
        ],
      },
      "Ahmedabad Junction": {
        name: "Ahmedabad Junction",
        code: "ADI",
        location: "Ahmedabad, Gujarat",
        trains: [
          { name: "Ahmedabad Express", number: "11049", time: "10:30 AM", destination: "Mumbai" },
          { name: "Gujarat Mail", number: "12902", time: "06:30 PM", destination: "Mumbai Central" }
        ],
      },
      "Ahmednagar": {
        name: "Ahmednagar",
        code: "ANG",
        location: "Ahmednagar, Maharashtra",
        trains: [
          { name: "Ahmednagar Express", number: "22647", time: "04:00 PM", destination: "Chennai" }
        ],
      },
      "Aizawl": {
        name: "Aizawl",
        code: "AIZW",
        location: "Aizawl, Mizoram",
        trains: [
          { name: "Mizoram Express", number: "15691", time: "07:00 AM", destination: "Guwahati" }
        ],
      },
      "Ajmer Junction": {
        name: "Ajmer Junction",
        code: "AII",
        location: "Ajmer, Rajasthan",
        trains: [
          { name: "Ajmer Shatabdi", number: "12015", time: "05:30 AM", destination: "New Delhi" }
        ],
      },
      "Akola Junction": {
        name: "Akola Junction",
        code: "AK",
        location: "Akola, Maharashtra",
        trains: [
          { name: "Akola Express", number: "12770", time: "06:00 AM", destination: "Hyderabad" }
        ],
      },
      "Alappuzha": {
        name: "Alappuzha",
        code: "ALLP",
        location: "Alappuzha, Kerala",
        trains: [
          { name: "Alappuzha Express", number: "16307", time: "09:30 AM", destination: "Kannur" }
        ],
      },
      "Aligarh Junction": {
        name: "Aligarh Junction",
        code: "ALJN",
        location: "Aligarh, Uttar Pradesh",
        trains: [
          { name: "Aligarh Express", number: "14631", time: "04:30 PM", destination: "New Delhi" }
        ],
      },
       "Bangalore City Railway Station": {
        name: "Bangalore City Railway Station",
        code: "SBC",
        location: "Bangalore, Karnataka",
        trains: [
          { name: "Karnataka Express", number: "12627", time: "08:20 AM", destination: "New Delhi" },
          { name: "Rajdhani Express", number: "22691", time: "07:00 PM", destination: "Nizamuddin" },
        ],
      },
      "Bareilly Junction": {
        name: "Bareilly Junction",
        code: "BE",
        location: "Bareilly, Uttar Pradesh",
        trains: [
          { name: "Lucknow Mail", number: "12230", time: "12:45 PM", destination: "Lucknow" },
          { name: "Ganga Yamuna Express", number: "14261", time: "02:30 AM", destination: "Jammu Tawi" },
        ],
      },
      "Bhopal Junction": {
        name: "Bhopal Junction",
        code: "BPL",
        location: "Bhopal, Madhya Pradesh",
        trains: [
          { name: "Bhopal Shatabdi", number: "12002", time: "08:00 AM", destination: "New Delhi" },
          { name: "Kerala Express", number: "12626", time: "04:20 PM", destination: "Thiruvananthapuram" },
        ],
      },
      "Bhubaneswar Railway Station": {
        name: "Bhubaneswar Railway Station",
        code: "BBS",
        location: "Bhubaneswar, Odisha",
        trains: [
          { name: "Konark Express", number: "11019", time: "03:45 PM", destination: "Mumbai CST" },
          { name: "Purushottam Express", number: "12802", time: "08:30 PM", destination: "New Delhi" },
        ],
      },
      "Bhilai Nagar": {
        name: "Bhilai Nagar",
        code: "BIA",
        location: "Bhilai, Chhattisgarh",
        trains: [
          { name: "Samta Express", number: "12807", time: "06:45 PM", destination: "Hazrat Nizamuddin" },
          { name: "Amarkantak Express", number: "12853", time: "07:30 AM", destination: "Bhopal" },
        ],
      },
      "Bikaner Junction": {
        name: "Bikaner Junction",
        code: "BKN",
        location: "Bikaner, Rajasthan",
        trains: [
          { name: "Bikaner Express", number: "14707", time: "05:30 PM", destination: "Howrah" },
          { name: "Ranthambore Express", number: "12465", time: "09:30 AM", destination: "Delhi" },
        ],
      },
      "Bilaspur Junction": {
        name: "Bilaspur Junction",
        code: "BSP",
        location: "Bilaspur, Chhattisgarh",
        trains: [
          { name: "Chhattisgarh Express", number: "18237", time: "12:30 PM", destination: "Amritsar" },
          { name: "Samarsata Express", number: "12152", time: "09:45 PM", destination: "Mumbai LTT" },
        ],
      },
      "Bokaro Steel City": {
        name: "Bokaro Steel City",
        code: "BKSC",
        location: "Bokaro, Jharkhand",
        trains: [
          { name: "Ranchi Express", number: "18634", time: "05:45 AM", destination: "Ajmer" },
          { name: "Shatabdi Express", number: "12019", time: "02:30 PM", destination: "Ranchi" },
        ],
      },
      "Bangalore Cantt": {
        name: "Bangalore Cantt",
        code: "BNC",
        location: "Bangalore, Karnataka",
        trains: [
          { name: "Bangalore Mail", number: "12658", time: "09:00 PM", destination: "Chennai" },
        ],
      },
      "Bangalore East": {
        name: "Bangalore East",
        code: "BNCE",
        location: "Bangalore, Karnataka",
        trains: [
          { name: "Brindavan Express", number: "12639", time: "11:00 AM", destination: "Chennai" },
        ],
      },
      "Bangalore South": {
        name: "Bangalore South",
        code: "BNCS",
        location: "Bangalore, Karnataka",
        trains: [
          { name: "Yeshvantpur Express", number: "16528", time: "05:30 PM", destination: "Yeshvantpur" },
        ],
      },
      "Bangalore West": {
        name: "Bangalore West",
        code: "BNCW",
        location: "Bangalore, Karnataka",
        trains: [
          { name: "Hubli Express", number: "16535", time: "08:30 PM", destination: "Hubli" },
        ],
      },
  };
  