/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as org_apache_iotdb_common_rpc_thrift from "./../../../common/rpc/thrift";
export interface ITFragmentInstanceInfoRespArgs {
    state: string;
    endTime?: number | Int64;
    failedMessages?: Array<string>;
    failureInfoList?: Array<Buffer>;
    errorCode?: org_apache_iotdb_common_rpc_thrift.TSStatus;
}
export class TFragmentInstanceInfoResp {
    public state: string;
    public endTime?: Int64;
    public failedMessages?: Array<string>;
    public failureInfoList?: Array<Buffer>;
    public errorCode?: org_apache_iotdb_common_rpc_thrift.TSStatus;
    constructor(args: ITFragmentInstanceInfoRespArgs) {
        if (args != null && args.state != null) {
            this.state = args.state;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[state] is unset!");
        }
        if (args != null && args.endTime != null) {
            if (typeof args.endTime === "number") {
                this.endTime = new Int64(args.endTime);
            }
            else {
                this.endTime = args.endTime;
            }
        }
        if (args != null && args.failedMessages != null) {
            this.failedMessages = args.failedMessages;
        }
        if (args != null && args.failureInfoList != null) {
            this.failureInfoList = args.failureInfoList;
        }
        if (args != null && args.errorCode != null) {
            this.errorCode = args.errorCode;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TFragmentInstanceInfoResp");
        if (this.state != null) {
            output.writeFieldBegin("state", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.state);
            output.writeFieldEnd();
        }
        if (this.endTime != null) {
            output.writeFieldBegin("endTime", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.endTime);
            output.writeFieldEnd();
        }
        if (this.failedMessages != null) {
            output.writeFieldBegin("failedMessages", thrift.Thrift.Type.LIST, 3);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.failedMessages.length);
            this.failedMessages.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.failureInfoList != null) {
            output.writeFieldBegin("failureInfoList", thrift.Thrift.Type.LIST, 4);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.failureInfoList.length);
            this.failureInfoList.forEach((value_2: Buffer): void => {
                output.writeBinary(value_2);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.errorCode != null) {
            output.writeFieldBegin("errorCode", thrift.Thrift.Type.STRUCT, 5);
            this.errorCode.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TFragmentInstanceInfoResp {
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
                        const value_3: string = input.readString();
                        _args.state = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_4: Int64 = input.readI64();
                        _args.endTime = value_4;
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
                        _args.failedMessages = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_7: Array<Buffer> = new Array<Buffer>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_8: Buffer = input.readBinary();
                            value_7.push(value_8);
                        }
                        input.readListEnd();
                        _args.failureInfoList = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_9: org_apache_iotdb_common_rpc_thrift.TSStatus = org_apache_iotdb_common_rpc_thrift.TSStatus.read(input);
                        _args.errorCode = value_9;
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
        if (_args.state !== undefined) {
            return new TFragmentInstanceInfoResp(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TFragmentInstanceInfoResp from input");
        }
    }
}
