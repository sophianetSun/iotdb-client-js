/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface ITCreatePipePluginInstanceReqArgs {
    pipePluginMeta: Buffer;
    jarFile: Buffer;
}
export class TCreatePipePluginInstanceReq {
    public pipePluginMeta: Buffer;
    public jarFile: Buffer;
    constructor(args: ITCreatePipePluginInstanceReqArgs) {
        if (args != null && args.pipePluginMeta != null) {
            this.pipePluginMeta = args.pipePluginMeta;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[pipePluginMeta] is unset!");
        }
        if (args != null && args.jarFile != null) {
            this.jarFile = args.jarFile;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[jarFile] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TCreatePipePluginInstanceReq");
        if (this.pipePluginMeta != null) {
            output.writeFieldBegin("pipePluginMeta", thrift.Thrift.Type.STRING, 1);
            output.writeBinary(this.pipePluginMeta);
            output.writeFieldEnd();
        }
        if (this.jarFile != null) {
            output.writeFieldBegin("jarFile", thrift.Thrift.Type.STRING, 2);
            output.writeBinary(this.jarFile);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TCreatePipePluginInstanceReq {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.TField = input.readFieldBegin();
            const fieldType: thrift.Thrift.Type = ret.ftype;
            const fieldId: number = ret.fid;
            if (fieldType === thrift.Thrift.Type.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_1: Buffer = input.readBinary();
                        _args.pipePluginMeta = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: Buffer = input.readBinary();
                        _args.jarFile = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.pipePluginMeta !== undefined && _args.jarFile !== undefined) {
            return new TCreatePipePluginInstanceReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TCreatePipePluginInstanceReq from input");
        }
    }
}
