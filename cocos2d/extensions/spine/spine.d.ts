declare namespace sp {
    export class Skelton extends cc.Node {
        public static create(
            keletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number
        ): Skelton;

        public constructor(
            skeletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number
        );

        public findBone(boneName: string): spine.Bone;
        public findSlot(slotName: string): spine.Slot;
        public getAttachment(
            slotName: string,
            attachmentName: string
        ): spine.RegionAttachment | spine.BoundingBoxAttachment;
        public getBlendFunc(): cc.BlendFunc;
        public getDebugBonesEnabled(): boolean;
        public getDebugSlotsEnabled(): boolean;
        public getTextureAtlas(regionAttachment): cc.Node;
        public init(): cc.Node;
        public initWithArgs(
            skeletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number
        );
        public setAttachment(slotName: string, attachmentName: string): boolean;
        public setBlendFunc(src: cc.BlendFunc | number, dst?: number);
        public setBonesToSetupPose();
        public setDebugBones(enable: boolean);
        public setDebugBonesEnabled(enabled: boolean);
        public setDebugSlotsEnabled(enabled: boolean);
        public setDebugSolots(enable: boolean);
        public setPremultipliedAlpha(alpha: number);
        public setSkeletonData(skeletonData:spine.SkeltonData, ownsSkeletonData: spine.SkeltonData);
        public setSkin(skinName: string): spine.Skin;
        public setSlotsToSetupPose();
        public setTimeScale(scale: number);
        public setToSetupPose();
        public updateWorldTransform();
    }

    export class SkeletonAnimation extends Skelton {
        public static create(
            skeletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number
        ): SkeletonAnimation;

        public constructor(
            skeletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number
        );

        public addAnimation(trackIndex: number, name: string, loop: boolean, delay?: number): spine.TrackEntry | null;
        public clearTrack(trackIndex: number): spine.TrackEntry | null;
        public clearTracks();
        public init(): spine.TrackEntry | null;
        public setAnimation(trackIndex: number, name: string, loop: boolean): spine.TrackEntry | null;
        public setAnimationListener(target, callback: function): spine.TrackEntry | null;
        public setAnimationStateData(stateData: spine.AnimationStateData);
        public setEndListener(listener: function);
        public setMix(fromAnimation: string, toAnimation: string, duration: number);
        public setStartListener(listener: function);
    }
}

declare namespace spine {
    export class SkeltonData {}
    export class Atlas {}
    export class Bone {}
    export class Slot {}
    export class Skin {}

    export class Attachment {}
    export class RegionAttachment extends Attachment {}
    export class BoundingBoxAttachment extends Attachment {}

    export class AnimationStateData {}
    export class TrackEntry {}
}
