/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as org_apache_iotdb_common_rpc_thrift from "./../../../common/rpc/thrift";
import * as TDataNodeActivation from "./TDataNodeActivation";
export interface ITDataNodeHeartbeatReqArgs {
    heartbeatTimestamp: number | Int64;
    needJudgeLeader: boolean;
    needSamplingLoad: boolean;
    timeSeriesQuotaRemain: number | Int64;
    schemaRegionIds?: Array<number>;
    dataRegionIds?: Array<number>;
    spaceQuotaUsage?: Map<string, org_apache_iotdb_common_rpc_thrift.TSpaceQuota>;
    needPipeMetaList?: boolean;
    deviceQuotaRemain?: number | Int64;
    activation?: TDataNodeActivation.TDataNodeActivation;
    configNodeEndPoints?: Set<org_apache_iotdb_common_rpc_thrift.TEndPoint>;
    dataNodes?: Map<number, org_apache_iotdb_common_rpc_thrift.TDataNodeLocation>;
    topology?: Map<number, Set<number>>;
    logicalClock: number | Int64;
    currentRegionOperations?: Array<org_apache_iotdb_common_rpc_thrift.TConsensusGroupId>;
}
export class TDataNodeHeartbeatReq {
    public heartbeatTimestamp: Int64;
    public needJudgeLeader: boolean;
    public needSamplingLoad: boolean;
    public timeSeriesQuotaRemain: Int64;
    public schemaRegionIds?: Array<number>;
    public dataRegionIds?: Array<number>;
    public spaceQuotaUsage?: Map<string, org_apache_iotdb_common_rpc_thrift.TSpaceQuota>;
    public needPipeMetaList?: boolean;
    public deviceQuotaRemain?: Int64;
    public activation?: TDataNodeActivation.TDataNodeActivation;
    public configNodeEndPoints?: Set<org_apache_iotdb_common_rpc_thrift.TEndPoint>;
    public dataNodes?: Map<number, org_apache_iotdb_common_rpc_thrift.TDataNodeLocation>;
    public topology?: Map<number, Set<number>>;
    public logicalClock: Int64;
    public currentRegionOperations?: Array<org_apache_iotdb_common_rpc_thrift.TConsensusGroupId>;
    constructor(args: ITDataNodeHeartbeatReqArgs) {
        if (args != null && args.heartbeatTimestamp != null) {
            if (typeof args.heartbeatTimestamp === "number") {
                this.heartbeatTimestamp = new Int64(args.heartbeatTimestamp);
            }
            else {
                this.heartbeatTimestamp = args.heartbeatTimestamp;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[heartbeatTimestamp] is unset!");
        }
        if (args != null && args.needJudgeLeader != null) {
            this.needJudgeLeader = args.needJudgeLeader;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[needJudgeLeader] is unset!");
        }
        if (args != null && args.needSamplingLoad != null) {
            this.needSamplingLoad = args.needSamplingLoad;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[needSamplingLoad] is unset!");
        }
        if (args != null && args.timeSeriesQuotaRemain != null) {
            if (typeof args.timeSeriesQuotaRemain === "number") {
                this.timeSeriesQuotaRemain = new Int64(args.timeSeriesQuotaRemain);
            }
            else {
                this.timeSeriesQuotaRemain = args.timeSeriesQuotaRemain;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[timeSeriesQuotaRemain] is unset!");
        }
        if (args != null && args.schemaRegionIds != null) {
            this.schemaRegionIds = args.schemaRegionIds;
        }
        if (args != null && args.dataRegionIds != null) {
            this.dataRegionIds = args.dataRegionIds;
        }
        if (args != null && args.spaceQuotaUsage != null) {
            this.spaceQuotaUsage = args.spaceQuotaUsage;
        }
        if (args != null && args.needPipeMetaList != null) {
            this.needPipeMetaList = args.needPipeMetaList;
        }
        if (args != null && args.deviceQuotaRemain != null) {
            if (typeof args.deviceQuotaRemain === "number") {
                this.deviceQuotaRemain = new Int64(args.deviceQuotaRemain);
            }
            else {
                this.deviceQuotaRemain = args.deviceQuotaRemain;
            }
        }
        if (args != null && args.activation != null) {
            this.activation = args.activation;
        }
        if (args != null && args.configNodeEndPoints != null) {
            this.configNodeEndPoints = args.configNodeEndPoints;
        }
        if (args != null && args.dataNodes != null) {
            this.dataNodes = args.dataNodes;
        }
        if (args != null && args.topology != null) {
            this.topology = args.topology;
        }
        if (args != null && args.logicalClock != null) {
            if (typeof args.logicalClock === "number") {
                this.logicalClock = new Int64(args.logicalClock);
            }
            else {
                this.logicalClock = args.logicalClock;
            }
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[logicalClock] is unset!");
        }
        if (args != null && args.currentRegionOperations != null) {
            this.currentRegionOperations = args.currentRegionOperations;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TDataNodeHeartbeatReq");
        if (this.heartbeatTimestamp != null) {
            output.writeFieldBegin("heartbeatTimestamp", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.heartbeatTimestamp);
            output.writeFieldEnd();
        }
        if (this.needJudgeLeader != null) {
            output.writeFieldBegin("needJudgeLeader", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.needJudgeLeader);
            output.writeFieldEnd();
        }
        if (this.needSamplingLoad != null) {
            output.writeFieldBegin("needSamplingLoad", thrift.Thrift.Type.BOOL, 3);
            output.writeBool(this.needSamplingLoad);
            output.writeFieldEnd();
        }
        if (this.timeSeriesQuotaRemain != null) {
            output.writeFieldBegin("timeSeriesQuotaRemain", thrift.Thrift.Type.I64, 4);
            output.writeI64(this.timeSeriesQuotaRemain);
            output.writeFieldEnd();
        }
        if (this.schemaRegionIds != null) {
            output.writeFieldBegin("schemaRegionIds", thrift.Thrift.Type.LIST, 5);
            output.writeListBegin(thrift.Thrift.Type.I32, this.schemaRegionIds.length);
            this.schemaRegionIds.forEach((value_1: number): void => {
                output.writeI32(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.dataRegionIds != null) {
            output.writeFieldBegin("dataRegionIds", thrift.Thrift.Type.LIST, 6);
            output.writeListBegin(thrift.Thrift.Type.I32, this.dataRegionIds.length);
            this.dataRegionIds.forEach((value_2: number): void => {
                output.writeI32(value_2);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.spaceQuotaUsage != null) {
            output.writeFieldBegin("spaceQuotaUsage", thrift.Thrift.Type.MAP, 7);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.STRUCT, this.spaceQuotaUsage.size);
            this.spaceQuotaUsage.forEach((value_3: org_apache_iotdb_common_rpc_thrift.TSpaceQuota, key_1: string): void => {
                output.writeString(key_1);
                value_3.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.needPipeMetaList != null) {
            output.writeFieldBegin("needPipeMetaList", thrift.Thrift.Type.BOOL, 8);
            output.writeBool(this.needPipeMetaList);
            output.writeFieldEnd();
        }
        if (this.deviceQuotaRemain != null) {
            output.writeFieldBegin("deviceQuotaRemain", thrift.Thrift.Type.I64, 9);
            output.writeI64(this.deviceQuotaRemain);
            output.writeFieldEnd();
        }
        if (this.activation != null) {
            output.writeFieldBegin("activation", thrift.Thrift.Type.STRUCT, 10);
            this.activation.write(output);
            output.writeFieldEnd();
        }
        if (this.configNodeEndPoints != null) {
            output.writeFieldBegin("configNodeEndPoints", thrift.Thrift.Type.SET, 11);
            output.writeSetBegin(thrift.Thrift.Type.STRUCT, this.configNodeEndPoints.size);
            this.configNodeEndPoints.forEach((value_4: org_apache_iotdb_common_rpc_thrift.TEndPoint): void => {
                value_4.write(output);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.dataNodes != null) {
            output.writeFieldBegin("dataNodes", thrift.Thrift.Type.MAP, 12);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, this.dataNodes.size);
            this.dataNodes.forEach((value_5: org_apache_iotdb_common_rpc_thrift.TDataNodeLocation, key_2: number): void => {
                output.writeI32(key_2);
                value_5.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.topology != null) {
            output.writeFieldBegin("topology", thrift.Thrift.Type.MAP, 13);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.SET, this.topology.size);
            this.topology.forEach((value_6: Set<number>, key_3: number): void => {
                output.writeI32(key_3);
                output.writeSetBegin(thrift.Thrift.Type.I32, value_6.size);
                value_6.forEach((value_7: number): void => {
                    output.writeI32(value_7);
                });
                output.writeSetEnd();
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.logicalClock != null) {
            output.writeFieldBegin("logicalClock", thrift.Thrift.Type.I64, 14);
            output.writeI64(this.logicalClock);
            output.writeFieldEnd();
        }
        if (this.currentRegionOperations != null) {
            output.writeFieldBegin("currentRegionOperations", thrift.Thrift.Type.LIST, 15);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.currentRegionOperations.length);
            this.currentRegionOperations.forEach((value_8: org_apache_iotdb_common_rpc_thrift.TConsensusGroupId): void => {
                value_8.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TDataNodeHeartbeatReq {
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
                        const value_9: Int64 = input.readI64();
                        _args.heartbeatTimestamp = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_10: boolean = input.readBool();
                        _args.needJudgeLeader = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_11: boolean = input.readBool();
                        _args.needSamplingLoad = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_12: Int64 = input.readI64();
                        _args.timeSeriesQuotaRemain = value_12;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_13: Array<number> = new Array<number>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_14: number = input.readI32();
                            value_13.push(value_14);
                        }
                        input.readListEnd();
                        _args.schemaRegionIds = value_13;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_15: Array<number> = new Array<number>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_16: number = input.readI32();
                            value_15.push(value_16);
                        }
                        input.readListEnd();
                        _args.dataRegionIds = value_15;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_17: Map<string, org_apache_iotdb_common_rpc_thrift.TSpaceQuota> = new Map<string, org_apache_iotdb_common_rpc_thrift.TSpaceQuota>();
                        const metadata_3: thrift.TMap = input.readMapBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const key_4: string = input.readString();
                            const value_18: org_apache_iotdb_common_rpc_thrift.TSpaceQuota = org_apache_iotdb_common_rpc_thrift.TSpaceQuota.read(input);
                            value_17.set(key_4, value_18);
                        }
                        input.readMapEnd();
                        _args.spaceQuotaUsage = value_17;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_19: boolean = input.readBool();
                        _args.needPipeMetaList = value_19;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_20: Int64 = input.readI64();
                        _args.deviceQuotaRemain = value_20;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_21: TDataNodeActivation.TDataNodeActivation = TDataNodeActivation.TDataNodeActivation.read(input);
                        _args.activation = value_21;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_22: Set<org_apache_iotdb_common_rpc_thrift.TEndPoint> = new Set<org_apache_iotdb_common_rpc_thrift.TEndPoint>();
                        const metadata_4: thrift.TSet = input.readSetBegin();
                        const size_4: number = metadata_4.size;
                        for (let i_4: number = 0; i_4 < size_4; i_4++) {
                            const value_23: org_apache_iotdb_common_rpc_thrift.TEndPoint = org_apache_iotdb_common_rpc_thrift.TEndPoint.read(input);
                            value_22.add(value_23);
                        }
                        input.readSetEnd();
                        _args.configNodeEndPoints = value_22;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_24: Map<number, org_apache_iotdb_common_rpc_thrift.TDataNodeLocation> = new Map<number, org_apache_iotdb_common_rpc_thrift.TDataNodeLocation>();
                        const metadata_5: thrift.TMap = input.readMapBegin();
                        const size_5: number = metadata_5.size;
                        for (let i_5: number = 0; i_5 < size_5; i_5++) {
                            const key_5: number = input.readI32();
                            const value_25: org_apache_iotdb_common_rpc_thrift.TDataNodeLocation = org_apache_iotdb_common_rpc_thrift.TDataNodeLocation.read(input);
                            value_24.set(key_5, value_25);
                        }
                        input.readMapEnd();
                        _args.dataNodes = value_24;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 13:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_26: Map<number, Set<number>> = new Map<number, Set<number>>();
                        const metadata_6: thrift.TMap = input.readMapBegin();
                        const size_6: number = metadata_6.size;
                        for (let i_6: number = 0; i_6 < size_6; i_6++) {
                            const key_6: number = input.readI32();
                            const value_27: Set<number> = new Set<number>();
                            const metadata_7: thrift.TSet = input.readSetBegin();
                            const size_7: number = metadata_7.size;
                            for (let i_7: number = 0; i_7 < size_7; i_7++) {
                                const value_28: number = input.readI32();
                                value_27.add(value_28);
                            }
                            input.readSetEnd();
                            value_26.set(key_6, value_27);
                        }
                        input.readMapEnd();
                        _args.topology = value_26;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 14:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_29: Int64 = input.readI64();
                        _args.logicalClock = value_29;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 15:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_30: Array<org_apache_iotdb_common_rpc_thrift.TConsensusGroupId> = new Array<org_apache_iotdb_common_rpc_thrift.TConsensusGroupId>();
                        const metadata_8: thrift.TList = input.readListBegin();
                        const size_8: number = metadata_8.size;
                        for (let i_8: number = 0; i_8 < size_8; i_8++) {
                            const value_31: org_apache_iotdb_common_rpc_thrift.TConsensusGroupId = org_apache_iotdb_common_rpc_thrift.TConsensusGroupId.read(input);
                            value_30.push(value_31);
                        }
                        input.readListEnd();
                        _args.currentRegionOperations = value_30;
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
        if (_args.heartbeatTimestamp !== undefined && _args.needJudgeLeader !== undefined && _args.needSamplingLoad !== undefined && _args.timeSeriesQuotaRemain !== undefined && _args.logicalClock !== undefined) {
            return new TDataNodeHeartbeatReq(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TDataNodeHeartbeatReq from input");
        }
    }
}
