/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface ITSGetOperationStatusReqArgs {
    sessionId: number | Int64;
    queryId: number | Int64;
}
export class TSGetOperationStatusReq {
    public sessionId: Int64;
    public queryId: Int64;
    constructor(args: ITSGetOperationStatusReqArgs) {
        if (args != null && args.sessionId != null) {
            if (typeof args.sessionId === "number") {
                this.sessionId = new Int64(args.sessionId);
            }
            else {
                this.sessionId = args.sessionId;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[sessionId] is unset!");
        }
        if (args != null && args.queryId != null) {
            if (typeof args.queryId === "number") {
                this.queryId = new Int64(args.queryId);
            }
            else {
                this.queryId = args.queryId;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[queryId] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TSGetOperationStatusReq");
        if (this.sessionId != null) {
            output.writeFieldBegin("sessionId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.sessionId);
            output.writeFieldEnd();
        }
        if (this.queryId != null) {
            output.writeFieldBegin("queryId", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.queryId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TSGetOperationStatusReq {
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
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_1: Int64 = input.readI64();
                        _args.sessionId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.queryId = value_2;
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
        if (_args.sessionId !== undefined && _args.queryId !== undefined) {
            return new TSGetOperationStatusReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TSGetOperationStatusReq from input");
        }
    }
}
