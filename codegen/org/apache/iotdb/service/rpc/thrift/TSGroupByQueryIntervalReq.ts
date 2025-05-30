/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as org_apache_iotdb_common_rpc_thrift from "./../../../common/rpc/thrift";
export interface ITSGroupByQueryIntervalReqArgs {
    sessionId: number | Int64;
    statementId: number | Int64;
    device: string;
    measurement: string;
    dataType: number;
    aggregationType: org_apache_iotdb_common_rpc_thrift.TAggregationType;
    database?: string;
    startTime?: number | Int64;
    endTime?: number | Int64;
    interval?: number | Int64;
    fetchSize?: number;
    timeout?: number | Int64;
}
export class TSGroupByQueryIntervalReq {
    public sessionId: Int64;
    public statementId: Int64;
    public device: string;
    public measurement: string;
    public dataType: number;
    public aggregationType: org_apache_iotdb_common_rpc_thrift.TAggregationType;
    public database?: string;
    public startTime?: Int64;
    public endTime?: Int64;
    public interval?: Int64;
    public fetchSize?: number;
    public timeout?: Int64;
    constructor(args: ITSGroupByQueryIntervalReqArgs) {
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
        if (args != null && args.device != null) {
            this.device = args.device;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[device] is unset!");
        }
        if (args != null && args.measurement != null) {
            this.measurement = args.measurement;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[measurement] is unset!");
        }
        if (args != null && args.dataType != null) {
            this.dataType = args.dataType;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[dataType] is unset!");
        }
        if (args != null && args.aggregationType != null) {
            this.aggregationType = args.aggregationType;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[aggregationType] is unset!");
        }
        if (args != null && args.database != null) {
            this.database = args.database;
        }
        if (args != null && args.startTime != null) {
            if (typeof args.startTime === "number") {
                this.startTime = new Int64(args.startTime);
            }
            else {
                this.startTime = args.startTime;
            }
        }
        if (args != null && args.endTime != null) {
            if (typeof args.endTime === "number") {
                this.endTime = new Int64(args.endTime);
            }
            else {
                this.endTime = args.endTime;
            }
        }
        if (args != null && args.interval != null) {
            if (typeof args.interval === "number") {
                this.interval = new Int64(args.interval);
            }
            else {
                this.interval = args.interval;
            }
        }
        if (args != null && args.fetchSize != null) {
            this.fetchSize = args.fetchSize;
        }
        if (args != null && args.timeout != null) {
            if (typeof args.timeout === "number") {
                this.timeout = new Int64(args.timeout);
            }
            else {
                this.timeout = args.timeout;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TSGroupByQueryIntervalReq");
        if (this.sessionId != null) {
            output.writeFieldBegin("sessionId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.sessionId);
            output.writeFieldEnd();
        }
        if (this.statementId != null) {
            output.writeFieldBegin("statementId", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.statementId);
            output.writeFieldEnd();
        }
        if (this.device != null) {
            output.writeFieldBegin("device", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.device);
            output.writeFieldEnd();
        }
        if (this.measurement != null) {
            output.writeFieldBegin("measurement", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.measurement);
            output.writeFieldEnd();
        }
        if (this.dataType != null) {
            output.writeFieldBegin("dataType", thrift.Thrift.Type.I32, 5);
            output.writeI32(this.dataType);
            output.writeFieldEnd();
        }
        if (this.aggregationType != null) {
            output.writeFieldBegin("aggregationType", thrift.Thrift.Type.I32, 6);
            output.writeI32(this.aggregationType);
            output.writeFieldEnd();
        }
        if (this.database != null) {
            output.writeFieldBegin("database", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.database);
            output.writeFieldEnd();
        }
        if (this.startTime != null) {
            output.writeFieldBegin("startTime", thrift.Thrift.Type.I64, 8);
            output.writeI64(this.startTime);
            output.writeFieldEnd();
        }
        if (this.endTime != null) {
            output.writeFieldBegin("endTime", thrift.Thrift.Type.I64, 9);
            output.writeI64(this.endTime);
            output.writeFieldEnd();
        }
        if (this.interval != null) {
            output.writeFieldBegin("interval", thrift.Thrift.Type.I64, 10);
            output.writeI64(this.interval);
            output.writeFieldEnd();
        }
        if (this.fetchSize != null) {
            output.writeFieldBegin("fetchSize", thrift.Thrift.Type.I32, 11);
            output.writeI32(this.fetchSize);
            output.writeFieldEnd();
        }
        if (this.timeout != null) {
            output.writeFieldBegin("timeout", thrift.Thrift.Type.I64, 12);
            output.writeI64(this.timeout);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TSGroupByQueryIntervalReq {
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
                        _args.statementId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.device = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.measurement = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_5: number = input.readI32();
                        _args.dataType = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_6: org_apache_iotdb_common_rpc_thrift.TAggregationType = input.readI32();
                        _args.aggregationType = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.database = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_8: Int64 = input.readI64();
                        _args.startTime = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_9: Int64 = input.readI64();
                        _args.endTime = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_10: Int64 = input.readI64();
                        _args.interval = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_11: number = input.readI32();
                        _args.fetchSize = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_12: Int64 = input.readI64();
                        _args.timeout = value_12;
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
        if (_args.sessionId !== undefined && _args.statementId !== undefined && _args.device !== undefined && _args.measurement !== undefined && _args.dataType !== undefined && _args.aggregationType !== undefined) {
            return new TSGroupByQueryIntervalReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TSGroupByQueryIntervalReq from input");
        }
    }
}
