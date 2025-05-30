/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as org_apache_iotdb_common_rpc_thrift from "./../../../common/rpc/thrift";
export interface ITCheckSchemaRegionUsingTemplateRespArgs {
    status: org_apache_iotdb_common_rpc_thrift.TSStatus;
    result: boolean;
}
export class TCheckSchemaRegionUsingTemplateResp {
    public status: org_apache_iotdb_common_rpc_thrift.TSStatus;
    public result: boolean;
    constructor(args: ITCheckSchemaRegionUsingTemplateRespArgs) {
        if (args != null && args.status != null) {
            this.status = args.status;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[status] is unset!");
        }
        if (args != null && args.result != null) {
            this.result = args.result;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[result] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TCheckSchemaRegionUsingTemplateResp");
        if (this.status != null) {
            output.writeFieldBegin("status", thrift.Thrift.Type.STRUCT, 1);
            this.status.write(output);
            output.writeFieldEnd();
        }
        if (this.result != null) {
            output.writeFieldBegin("result", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.result);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TCheckSchemaRegionUsingTemplateResp {
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
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_1: org_apache_iotdb_common_rpc_thrift.TSStatus = org_apache_iotdb_common_rpc_thrift.TSStatus.read(input);
                        _args.status = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.result = value_2;
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
        if (_args.status !== undefined && _args.result !== undefined) {
            return new TCheckSchemaRegionUsingTemplateResp(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TCheckSchemaRegionUsingTemplateResp from input");
        }
    }
}
