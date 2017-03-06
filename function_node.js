msg.payload =  {
    "timestamp": getCurrentTime(),
    "tiltLR": msg.payload.d.tiltLR,
    "tiltFB": msg.payload.d.tiltFB,
    "accelX": msg.payload.d.accelX
};

return msg;
