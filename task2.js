function ipv4Parser(ip, mask){
  const ipP = ip.split('.').map(Number);
  const maskP = mask.split('.').map(Number);
  
  const network = [];
  const host = [];
  
  for(let i = 0; i<4; i++){
    const net = ipP[i] & maskP[i];
    network.push(net);
    host.push(ipP[i]-net);
  }
    return [network.join('.'), host.join('.')];
}
