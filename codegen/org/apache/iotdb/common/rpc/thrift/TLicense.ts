/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface ITLicenseArgs {
    licenseIssueTimestamp: number | Int64;
    expireTimestamp: number | Int64;
    dataNodeNumLimit: number;
    cpuCoreNumLimit: number;
    deviceNumLimit: number | Int64;
    sensorNumLimit: number | Int64;
    disconnectionFromActiveNodeTimeLimit: number | Int64;
    mlNodeNumLimit: number;
}
export class TLicense {
    public licenseIssueTimestamp: Int64;
    public expireTimestamp: Int64;
    public dataNodeNumLimit: number;
    public cpuCoreNumLimit: number;
    public deviceNumLimit: Int64;
    public sensorNumLimit: Int64;
    public disconnectionFromActiveNodeTimeLimit: Int64;
    public mlNodeNumLimit: number;
    constructor(args: ITLicenseArgs) {
        if (args != null && args.licenseIssueTimestamp != null) {
            if (typeof args.licenseIssueTimestamp === "number") {
                this.licenseIssueTimestamp = new Int64(args.licenseIssueTimestamp);
            }
            else {
                this.licenseIssueTimestamp = args.licenseIssueTimestamp;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[licenseIssueTimestamp] is unset!");
        }
        if (args != null && args.expireTimestamp != null) {
            if (typeof args.expireTimestamp === "number") {
                this.expireTimestamp = new Int64(args.expireTimestamp);
            }
            else {
                this.expireTimestamp = args.expireTimestamp;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[expireTimestamp] is unset!");
        }
        if (args != null && args.dataNodeNumLimit != null) {
            this.dataNodeNumLimit = args.dataNodeNumLimit;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[dataNodeNumLimit] is unset!");
        }
        if (args != null && args.cpuCoreNumLimit != null) {
            this.cpuCoreNumLimit = args.cpuCoreNumLimit;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[cpuCoreNumLimit] is unset!");
        }
        if (args != null && args.deviceNumLimit != null) {
            if (typeof args.deviceNumLimit === "number") {
                this.deviceNumLimit = new Int64(args.deviceNumLimit);
            }
            else {
                this.deviceNumLimit = args.deviceNumLimit;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[deviceNumLimit] is unset!");
        }
        if (args != null && args.sensorNumLimit != null) {
            if (typeof args.sensorNumLimit === "number") {
                this.sensorNumLimit = new Int64(args.sensorNumLimit);
            }
            else {
                this.sensorNumLimit = args.sensorNumLimit;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[sensorNumLimit] is unset!");
        }
        if (args != null && args.disconnectionFromActiveNodeTimeLimit != null) {
            if (typeof args.disconnectionFromActiveNodeTimeLimit === "number") {
                this.disconnectionFromActiveNodeTimeLimit = new Int64(args.disconnectionFromActiveNodeTimeLimit);
            }
            else {
                this.disconnectionFromActiveNodeTimeLimit = args.disconnectionFromActiveNodeTimeLimit;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[disconnectionFromActiveNodeTimeLimit] is unset!");
        }
        if (args != null && args.mlNodeNumLimit != null) {
            this.mlNodeNumLimit = args.mlNodeNumLimit;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[mlNodeNumLimit] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TLicense");
        if (this.licenseIssueTimestamp != null) {
            output.writeFieldBegin("licenseIssueTimestamp", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.licenseIssueTimestamp);
            output.writeFieldEnd();
        }
        if (this.expireTimestamp != null) {
            output.writeFieldBegin("expireTimestamp", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.expireTimestamp);
            output.writeFieldEnd();
        }
        if (this.dataNodeNumLimit != null) {
            output.writeFieldBegin("dataNodeNumLimit", thrift.Thrift.Type.I16, 4);
            output.writeI16(this.dataNodeNumLimit);
            output.writeFieldEnd();
        }
        if (this.cpuCoreNumLimit != null) {
            output.writeFieldBegin("cpuCoreNumLimit", thrift.Thrift.Type.I32, 5);
            output.writeI32(this.cpuCoreNumLimit);
            output.writeFieldEnd();
        }
        if (this.deviceNumLimit != null) {
            output.writeFieldBegin("deviceNumLimit", thrift.Thrift.Type.I64, 6);
            output.writeI64(this.deviceNumLimit);
            output.writeFieldEnd();
        }
        if (this.sensorNumLimit != null) {
            output.writeFieldBegin("sensorNumLimit", thrift.Thrift.Type.I64, 7);
            output.writeI64(this.sensorNumLimit);
            output.writeFieldEnd();
        }
        if (this.disconnectionFromActiveNodeTimeLimit != null) {
            output.writeFieldBegin("disconnectionFromActiveNodeTimeLimit", thrift.Thrift.Type.I64, 8);
            output.writeI64(this.disconnectionFromActiveNodeTimeLimit);
            output.writeFieldEnd();
        }
        if (this.mlNodeNumLimit != null) {
            output.writeFieldBegin("mlNodeNumLimit", thrift.Thrift.Type.I16, 9);
            output.writeI16(this.mlNodeNumLimit);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TLicense {
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
                        _args.licenseIssueTimestamp = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.expireTimestamp = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I16) {
                        const value_3: number = input.readI16();
                        _args.dataNodeNumLimit = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.cpuCoreNumLimit = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_5: Int64 = input.readI64();
                        _args.deviceNumLimit = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_6: Int64 = input.readI64();
                        _args.sensorNumLimit = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_7: Int64 = input.readI64();
                        _args.disconnectionFromActiveNodeTimeLimit = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.I16) {
                        const value_8: number = input.readI16();
                        _args.mlNodeNumLimit = value_8;
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
        if (_args.licenseIssueTimestamp !== undefined && _args.expireTimestamp !== undefined && _args.dataNodeNumLimit !== undefined && _args.cpuCoreNumLimit !== undefined && _args.deviceNumLimit !== undefined && _args.sensorNumLimit !== undefined && _args.disconnectionFromActiveNodeTimeLimit !== undefined && _args.mlNodeNumLimit !== undefined) {
            return new TLicense(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TLicense from input");
        }
    }
}
