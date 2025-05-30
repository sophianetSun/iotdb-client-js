/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as TFragmentInstanceId from "./TFragmentInstanceId";
export interface ITCancelQueryReqArgs {
    queryId: string;
    fragmentInstanceIds: Array<TFragmentInstanceId.TFragmentInstanceId>;
    hasThrowable: boolean;
}
export class TCancelQueryReq {
    public queryId: string;
    public fragmentInstanceIds: Array<TFragmentInstanceId.TFragmentInstanceId>;
    public hasThrowable: boolean;
    constructor(args: ITCancelQueryReqArgs) {
        if (args != null && args.queryId != null) {
            this.queryId = args.queryId;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[queryId] is unset!");
        }
        if (args != null && args.fragmentInstanceIds != null) {
            this.fragmentInstanceIds = args.fragmentInstanceIds;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[fragmentInstanceIds] is unset!");
        }
        if (args != null && args.hasThrowable != null) {
            this.hasThrowable = args.hasThrowable;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[hasThrowable] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TCancelQueryReq");
        if (this.queryId != null) {
            output.writeFieldBegin("queryId", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.queryId);
            output.writeFieldEnd();
        }
        if (this.fragmentInstanceIds != null) {
            output.writeFieldBegin("fragmentInstanceIds", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.fragmentInstanceIds.length);
            this.fragmentInstanceIds.forEach((value_1: TFragmentInstanceId.TFragmentInstanceId): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.hasThrowable != null) {
            output.writeFieldBegin("hasThrowable", thrift.Thrift.Type.BOOL, 3);
            output.writeBool(this.hasThrowable);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TCancelQueryReq {
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
                        const value_2: string = input.readString();
                        _args.queryId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_3: Array<TFragmentInstanceId.TFragmentInstanceId> = new Array<TFragmentInstanceId.TFragmentInstanceId>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: TFragmentInstanceId.TFragmentInstanceId = TFragmentInstanceId.TFragmentInstanceId.read(input);
                            value_3.push(value_4);
                        }
                        input.readListEnd();
                        _args.fragmentInstanceIds = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_5: boolean = input.readBool();
                        _args.hasThrowable = value_5;
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
        if (_args.queryId !== undefined && _args.fragmentInstanceIds !== undefined && _args.hasThrowable !== undefined) {
            return new TCancelQueryReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TCancelQueryReq from input");
        }
    }
}
