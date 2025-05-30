/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface ITSRawDataQueryReqArgs {
    sessionId: number | Int64;
    paths: Array<string>;
    fetchSize?: number;
    startTime: number | Int64;
    endTime: number | Int64;
    statementId: number | Int64;
    enableRedirectQuery?: boolean;
    jdbcQuery?: boolean;
    timeout?: number | Int64;
    legalPathNodes?: boolean;
}
export class TSRawDataQueryReq {
    public sessionId: Int64;
    public paths: Array<string>;
    public fetchSize?: number;
    public startTime: Int64;
    public endTime: Int64;
    public statementId: Int64;
    public enableRedirectQuery?: boolean;
    public jdbcQuery?: boolean;
    public timeout?: Int64;
    public legalPathNodes?: boolean;
    constructor(args: ITSRawDataQueryReqArgs) {
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
        if (args != null && args.paths != null) {
            this.paths = args.paths;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[paths] is unset!");
        }
        if (args != null && args.fetchSize != null) {
            this.fetchSize = args.fetchSize;
        }
        if (args != null && args.startTime != null) {
            if (typeof args.startTime === "number") {
                this.startTime = new Int64(args.startTime);
            }
            else {
                this.startTime = args.startTime;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[startTime] is unset!");
        }
        if (args != null && args.endTime != null) {
            if (typeof args.endTime === "number") {
                this.endTime = new Int64(args.endTime);
            }
            else {
                this.endTime = args.endTime;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[endTime] is unset!");
        }
        if (args != null && args.statementId != null) {
            if (typeof args.statementId === "number") {
                this.statementId = new Int64(args.statementId);
            }
            else {
                this.statementId = args.statementId;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[statementId] is unset!");
        }
        if (args != null && args.enableRedirectQuery != null) {
            this.enableRedirectQuery = args.enableRedirectQuery;
        }
        if (args != null && args.jdbcQuery != null) {
            this.jdbcQuery = args.jdbcQuery;
        }
        if (args != null && args.timeout != null) {
            if (typeof args.timeout === "number") {
                this.timeout = new Int64(args.timeout);
            }
            else {
                this.timeout = args.timeout;
            }
        }
        if (args != null && args.legalPathNodes != null) {
            this.legalPathNodes = args.legalPathNodes;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TSRawDataQueryReq");
        if (this.sessionId != null) {
            output.writeFieldBegin("sessionId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.sessionId);
            output.writeFieldEnd();
        }
        if (this.paths != null) {
            output.writeFieldBegin("paths", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.paths.length);
            this.paths.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.fetchSize != null) {
            output.writeFieldBegin("fetchSize", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.fetchSize);
            output.writeFieldEnd();
        }
        if (this.startTime != null) {
            output.writeFieldBegin("startTime", thrift.Thrift.Type.I64, 4);
            output.writeI64(this.startTime);
            output.writeFieldEnd();
        }
        if (this.endTime != null) {
            output.writeFieldBegin("endTime", thrift.Thrift.Type.I64, 5);
            output.writeI64(this.endTime);
            output.writeFieldEnd();
        }
        if (this.statementId != null) {
            output.writeFieldBegin("statementId", thrift.Thrift.Type.I64, 6);
            output.writeI64(this.statementId);
            output.writeFieldEnd();
        }
        if (this.enableRedirectQuery != null) {
            output.writeFieldBegin("enableRedirectQuery", thrift.Thrift.Type.BOOL, 7);
            output.writeBool(this.enableRedirectQuery);
            output.writeFieldEnd();
        }
        if (this.jdbcQuery != null) {
            output.writeFieldBegin("jdbcQuery", thrift.Thrift.Type.BOOL, 8);
            output.writeBool(this.jdbcQuery);
            output.writeFieldEnd();
        }
        if (this.timeout != null) {
            output.writeFieldBegin("timeout", thrift.Thrift.Type.I64, 9);
            output.writeI64(this.timeout);
            output.writeFieldEnd();
        }
        if (this.legalPathNodes != null) {
            output.writeFieldBegin("legalPathNodes", thrift.Thrift.Type.BOOL, 10);
            output.writeBool(this.legalPathNodes);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TSRawDataQueryReq {
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
                        const value_2: Int64 = input.readI64();
                        _args.sessionId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_3: Array<string> = new Array<string>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: string = input.readString();
                            value_3.push(value_4);
                        }
                        input.readListEnd();
                        _args.paths = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_5: number = input.readI32();
                        _args.fetchSize = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_6: Int64 = input.readI64();
                        _args.startTime = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_7: Int64 = input.readI64();
                        _args.endTime = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_8: Int64 = input.readI64();
                        _args.statementId = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_9: boolean = input.readBool();
                        _args.enableRedirectQuery = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_10: boolean = input.readBool();
                        _args.jdbcQuery = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_11: Int64 = input.readI64();
                        _args.timeout = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_12: boolean = input.readBool();
                        _args.legalPathNodes = value_12;
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
        if (_args.sessionId !== undefined && _args.paths !== undefined && _args.startTime !== undefined && _args.endTime !== undefined && _args.statementId !== undefined) {
            return new TSRawDataQueryReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TSRawDataQueryReq from input");
        }
    }
}
