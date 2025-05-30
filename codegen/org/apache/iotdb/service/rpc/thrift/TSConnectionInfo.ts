/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as TSConnectionType from "./TSConnectionType";
export interface ITSConnectionInfoArgs {
    userName: string;
    logInTime: number | Int64;
    connectionId: string;
    type: TSConnectionType.TSConnectionType;
}
export class TSConnectionInfo {
    public userName: string;
    public logInTime: Int64;
    public connectionId: string;
    public type: TSConnectionType.TSConnectionType;
    constructor(args: ITSConnectionInfoArgs) {
        if (args != null && args.userName != null) {
            this.userName = args.userName;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[userName] is unset!");
        }
        if (args != null && args.logInTime != null) {
            if (typeof args.logInTime === "number") {
                this.logInTime = new Int64(args.logInTime);
            }
            else {
                this.logInTime = args.logInTime;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[logInTime] is unset!");
        }
        if (args != null && args.connectionId != null) {
            this.connectionId = args.connectionId;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[connectionId] is unset!");
        }
        if (args != null && args.type != null) {
            this.type = args.type;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[type] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TSConnectionInfo");
        if (this.userName != null) {
            output.writeFieldBegin("userName", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.userName);
            output.writeFieldEnd();
        }
        if (this.logInTime != null) {
            output.writeFieldBegin("logInTime", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.logInTime);
            output.writeFieldEnd();
        }
        if (this.connectionId != null) {
            output.writeFieldBegin("connectionId", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.connectionId);
            output.writeFieldEnd();
        }
        if (this.type != null) {
            output.writeFieldBegin("type", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.type);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TSConnectionInfo {
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
                        _args.userName = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.logInTime = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.connectionId = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: TSConnectionType.TSConnectionType = input.readI32();
                        _args.type = value_4;
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
        if (_args.userName !== undefined && _args.logInTime !== undefined && _args.connectionId !== undefined && _args.type !== undefined) {
            return new TSConnectionInfo(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TSConnectionInfo from input");
        }
    }
}
