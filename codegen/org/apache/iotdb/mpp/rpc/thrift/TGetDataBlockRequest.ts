/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as TFragmentInstanceId from "./TFragmentInstanceId";
export interface ITGetDataBlockRequestArgs {
    sourceFragmentInstanceId: TFragmentInstanceId.TFragmentInstanceId;
    startSequenceId: number;
    endSequenceId: number;
    index: number;
}
export class TGetDataBlockRequest {
    public sourceFragmentInstanceId: TFragmentInstanceId.TFragmentInstanceId;
    public startSequenceId: number;
    public endSequenceId: number;
    public index: number;
    constructor(args: ITGetDataBlockRequestArgs) {
        if (args != null && args.sourceFragmentInstanceId != null) {
            this.sourceFragmentInstanceId = args.sourceFragmentInstanceId;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[sourceFragmentInstanceId] is unset!");
        }
        if (args != null && args.startSequenceId != null) {
            this.startSequenceId = args.startSequenceId;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[startSequenceId] is unset!");
        }
        if (args != null && args.endSequenceId != null) {
            this.endSequenceId = args.endSequenceId;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[endSequenceId] is unset!");
        }
        if (args != null && args.index != null) {
            this.index = args.index;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TGetDataBlockRequest");
        if (this.sourceFragmentInstanceId != null) {
            output.writeFieldBegin("sourceFragmentInstanceId", thrift.Thrift.Type.STRUCT, 1);
            this.sourceFragmentInstanceId.write(output);
            output.writeFieldEnd();
        }
        if (this.startSequenceId != null) {
            output.writeFieldBegin("startSequenceId", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.startSequenceId);
            output.writeFieldEnd();
        }
        if (this.endSequenceId != null) {
            output.writeFieldBegin("endSequenceId", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.endSequenceId);
            output.writeFieldEnd();
        }
        if (this.index != null) {
            output.writeFieldBegin("index", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.index);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TGetDataBlockRequest {
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
                        const value_1: TFragmentInstanceId.TFragmentInstanceId = TFragmentInstanceId.TFragmentInstanceId.read(input);
                        _args.sourceFragmentInstanceId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.startSequenceId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.endSequenceId = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.index = value_4;
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
        if (_args.sourceFragmentInstanceId !== undefined && _args.startSequenceId !== undefined && _args.endSequenceId !== undefined && _args.index !== undefined) {
            return new TGetDataBlockRequest(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TGetDataBlockRequest from input");
        }
    }
}
