import * as grpc from '@grpc/grpc-js';
import * as protoloader from '@grpc/proto-loader';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as implementation from './implementations';
dotenv.config();

const packageDefinition = protoloader.loadSync(
    path.resolve(__dirname, 'protob', 'contract.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      });

const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

//@ts-ignore
const service = proto.ProductService.service;
//@ts-ignore
server.addService(service, implementation);

server.bindAsync(`0.0.0.0:${process.env.PORT}`, grpc.ServerCredentials.createInsecure(),(err, port)=>{
  server.start()
  if(!err) console.log(`Listening on port ${port}`)
});
