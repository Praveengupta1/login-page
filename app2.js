const clint = new mongoose.schema(
  {
    userid : String,
    password : String,
    phone : Number,
    email : String,
    name : String,
    address : String,
    order : [
      {
        order_type : String
      },
      {
        origin_station : String,
        destination_station : String,
        time_slot : String
      },
      {
        product_type : String,
        product_name : String,
        number_of_units : String,
        weight_of_package : String,
        volume_of_package : String,
      },
      {
        order_number : String,
        ETA : String,
        OTP : String
      }
    ],

  }
);
