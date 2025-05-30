/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as TEndPoint from "./TEndPoint";
export interface ITDataNodeLocationArgs {
    dataNodeId: number;
    clientRpcEndPoint: TEndPoint.TEndPoint;
    internalEndPoint: TEndPoint.TEndPoint;
    mPPDataExchangeEndPoint: TEndPoint.TEndPoint;
    dataRegionConsensusEndPoint: TEndPoint.TEndPoint;
    schemaRegionConsensusEndPoint: TEndPoint.TEndPoint;
}
export class TDataNodeLocation {
    public dataNodeId: number;
    public clientRpcEndPoint: TEndPoint.TEndPoint;
    public internalEndPoint: TEndPoint.TEndPoint;
    public mPPDataExchangeEndPoint: TEndPoint.TEndPoint;
    public dataRegionConsensusEndPoint: TEndPoint.TEndPoint;
    public schemaRegionConsensusEndPoint: TEndPoint.TEndPoint;
    constructor(args: ITDataNodeLocationArgs) {
        if (args != null && args.dataNodeId != null) {
            this.dataNodeId = args.dataNodeId;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[dataNodeId] is unset!");
        }
        if (args != null && args.clientRpcEndPoint != null) {
            this.clientRpcEndPoint = args.clientRpcEndPoint;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[clientRpcEndPoint] is unset!");
        }
        if (args != null && args.internalEndPoint != null) {
            this.internalEndPoint = args.internalEndPoint;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[internalEndPoint] is unset!");
        }
        if (args != null && args.mPPDataExchangeEndPoint != null) {
            this.mPPDataExchangeEndPoint = args.mPPDataExchangeEndPoint;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[mPPDataExchangeEndPoint] is unset!");
        }
        if (args != null && args.dataRegionConsensusEndPoint != null) {
            this.dataRegionConsensusEndPoint = args.dataRegionConsensusEndPoint;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[dataRegionConsensusEndPoint] is unset!");
        }
        if (args != null && args.schemaRegionConsensusEndPoint != null) {
            this.schemaRegionConsensusEndPoint = args.schemaRegionConsensusEndPoint;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[schemaRegionConsensusEndPoint] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TDataNodeLocation");
        if (this.dataNodeId != null) {
            output.writeFieldBegin("dataNodeId", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.dataNodeId);
            output.writeFieldEnd();
        }
        if (this.clientRpcEndPoint != null) {
            output.writeFieldBegin("clientRpcEndPoint", thrift.Thrift.Type.STRUCT, 2);
            this.clientRpcEndPoint.write(output);
            output.writeFieldEnd();
        }
        if (this.internalEndPoint != null) {
            output.writeFieldBegin("internalEndPoint", thrift.Thrift.Type.STRUCT, 3);
            this.internalEndPoint.write(output);
            output.writeFieldEnd();
        }
        if (this.mPPDataExchangeEndPoint != null) {
            output.writeFieldBegin("mPPDataExchangeEndPoint", thrift.Thrift.Type.STRUCT, 4);
            this.mPPDataExchangeEndPoint.write(output);
            output.writeFieldEnd();
        }
        if (this.dataRegionConsensusEndPoint != null) {
            output.writeFieldBegin("dataRegionConsensusEndPoint", thrift.Thrift.Type.STRUCT, 5);
            this.dataRegionConsensusEndPoint.write(output);
            output.writeFieldEnd();
        }
        if (this.schemaRegionConsensusEndPoint != null) {
            output.writeFieldBegin("schemaRegionConsensusEndPoint", thrift.Thrift.Type.STRUCT, 6);
            this.schemaRegionConsensusEndPoint.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TDataNodeLocation {
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
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_1: number = input.readI32();
                        _args.dataNodeId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: TEndPoint.TEndPoint = TEndPoint.TEndPoint.read(input);
                        _args.clientRpcEndPoint = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: TEndPoint.TEndPoint = TEndPoint.TEndPoint.read(input);
                        _args.internalEndPoint = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_4: TEndPoint.TEndPoint = TEndPoint.TEndPoint.read(input);
                        _args.mPPDataExchangeEndPoint = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_5: TEndPoint.TEndPoint = TEndPoint.TEndPoint.read(input);
                        _args.dataRegionConsensusEndPoint = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_6: TEndPoint.TEndPoint = TEndPoint.TEndPoint.read(input);
                        _args.schemaRegionConsensusEndPoint = value_6;
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
        if (_args.dataNodeId !== undefined && _args.clientRpcEndPoint !== undefined && _args.internalEndPoint !== undefined && _args.mPPDataExchangeEndPoint !== undefined && _args.dataRegionConsensusEndPoint !== undefined && _args.schemaRegionConsensusEndPoint !== undefined) {
            return new TDataNodeLocation(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TDataNodeLocation from input");
        }
    }
}
