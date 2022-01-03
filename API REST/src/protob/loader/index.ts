import * as protoloader from '@grpc/proto-loader';
import * as path from 'path';
import * as grpc from '@grpc/grpc-js';
import { promisify } from 'util';



export function load(serviceName: string, address: string, file: string ){
    const protoDef = protoloader.loadSync(
        path.resolve(__dirname, '..', `${file}.proto`),
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    );
    
    const proto = grpc.loadPackageDefinition(protoDef);
    
    //@ts-ignore
    const client = new proto[serviceName](address, grpc.credentials.createInsecure());
    /*
    // Promisify all client methods
    Object.entries(client.__proto__).map(([prop, value]) => {
        //@ts-ignore
        if (value.originalName !== undefined) {
          //@ts-ignore  
          client[prop] = promisify(value);
        }
      });*/
    return client;
}