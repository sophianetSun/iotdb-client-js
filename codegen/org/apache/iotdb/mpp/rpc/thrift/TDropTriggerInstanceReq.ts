/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface ITDropTriggerInstanceReqArgs {
    triggerName: string;
    needToDeleteJarFile: boolean;
}
export class TDropTriggerInstanceReq {
    public triggerName: string;
    public needToDeleteJarFile: boolean;
    constructor(args: ITDropTriggerInstanceReqArgs) {
        if (args != null && args.triggerName != null) {
            this.triggerName = args.triggerName;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[triggerName] is unset!");
        }
        if (args != null && args.needToDeleteJarFile != null) {
            this.needToDeleteJarFile = args.needToDeleteJarFile;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[needToDeleteJarFile] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TDropTriggerInstanceReq");
        if (this.triggerName != null) {
            output.writeFieldBegin("triggerName", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.triggerName);
            output.writeFieldEnd();
        }
        if (this.needToDeleteJarFile != null) {
            output.writeFieldBegin("needToDeleteJarFile", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.needToDeleteJarFile);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TDropTriggerInstanceReq {
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
                        const value_1: string = input.readString();
                        _args.triggerName = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.needToDeleteJarFile = value_2;
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
        if (_args.triggerName !== undefined && _args.needToDeleteJarFile !== undefined) {
            return new TDropTriggerInstanceReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TDropTriggerInstanceReq from input");
        }
    }
}
