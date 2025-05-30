/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface ITSInsertRecordReqArgs {
    sessionId: number | Int64;
    prefixPath: string;
    measurements: Array<string>;
    values: Buffer;
    timestamp: number | Int64;
    isAligned?: boolean;
    isWriteToTable?: boolean;
    columnCategoryies?: Array<number>;
}
export class TSInsertRecordReq {
    public sessionId: Int64;
    public prefixPath: string;
    public measurements: Array<string>;
    public values: Buffer;
    public timestamp: Int64;
    public isAligned?: boolean;
    public isWriteToTable?: boolean;
    public columnCategoryies?: Array<number>;
    constructor(args: ITSInsertRecordReqArgs) {
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
        if (args != null && args.prefixPath != null) {
            this.prefixPath = args.prefixPath;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[prefixPath] is unset!");
        }
        if (args != null && args.measurements != null) {
            this.measurements = args.measurements;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[measurements] is unset!");
        }
        if (args != null && args.values != null) {
            this.values = args.values;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[values] is unset!");
        }
        if (args != null && args.timestamp != null) {
            if (typeof args.timestamp === "number") {
                this.timestamp = new Int64(args.timestamp);
            }
            else {
                this.timestamp = args.timestamp;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[timestamp] is unset!");
        }
        if (args != null && args.isAligned != null) {
            this.isAligned = args.isAligned;
        }
        if (args != null && args.isWriteToTable != null) {
            this.isWriteToTable = args.isWriteToTable;
        }
        if (args != null && args.columnCategoryies != null) {
            this.columnCategoryies = args.columnCategoryies;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TSInsertRecordReq");
        if (this.sessionId != null) {
            output.writeFieldBegin("sessionId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.sessionId);
            output.writeFieldEnd();
        }
        if (this.prefixPath != null) {
            output.writeFieldBegin("prefixPath", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.prefixPath);
            output.writeFieldEnd();
        }
        if (this.measurements != null) {
            output.writeFieldBegin("measurements", thrift.Thrift.Type.LIST, 3);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.measurements.length);
            this.measurements.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.values != null) {
            output.writeFieldBegin("values", thrift.Thrift.Type.STRING, 4);
            output.writeBinary(this.values);
            output.writeFieldEnd();
        }
        if (this.timestamp != null) {
            output.writeFieldBegin("timestamp", thrift.Thrift.Type.I64, 5);
            output.writeI64(this.timestamp);
            output.writeFieldEnd();
        }
        if (this.isAligned != null) {
            output.writeFieldBegin("isAligned", thrift.Thrift.Type.BOOL, 6);
            output.writeBool(this.isAligned);
            output.writeFieldEnd();
        }
        if (this.isWriteToTable != null) {
            output.writeFieldBegin("isWriteToTable", thrift.Thrift.Type.BOOL, 7);
            output.writeBool(this.isWriteToTable);
            output.writeFieldEnd();
        }
        if (this.columnCategoryies != null) {
            output.writeFieldBegin("columnCategoryies", thrift.Thrift.Type.LIST, 8);
            output.writeListBegin(thrift.Thrift.Type.BYTE, this.columnCategoryies.length);
            this.columnCategoryies.forEach((value_2: number): void => {
                output.writeByte(value_2);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TSInsertRecordReq {
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
                        const value_3: Int64 = input.readI64();
                        _args.sessionId = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.prefixPath = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_5: Array<string> = new Array<string>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: string = input.readString();
                            value_5.push(value_6);
                        }
                        input.readListEnd();
                        _args.measurements = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: Buffer = input.readBinary();
                        _args.values = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_8: Int64 = input.readI64();
                        _args.timestamp = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_9: boolean = input.readBool();
                        _args.isAligned = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_10: boolean = input.readBool();
                        _args.isWriteToTable = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_11: Array<number> = new Array<number>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_12: number = input.readByte();
                            value_11.push(value_12);
                        }
                        input.readListEnd();
                        _args.columnCategoryies = value_11;
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
        if (_args.sessionId !== undefined && _args.prefixPath !== undefined && _args.measurements !== undefined && _args.values !== undefined && _args.timestamp !== undefined) {
            return new TSInsertRecordReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TSInsertRecordReq from input");
        }
    }
}
