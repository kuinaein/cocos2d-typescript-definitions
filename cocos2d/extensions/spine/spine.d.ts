declare namespace sp {
    export class Skelton extends cc.Node {}

    export class SkeletonAnimation extends Skelton {
        public static create(
            skeletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number
        ): SkeletonAnimation;

        public constructor(
            skeletonDataFile: spine.SkeltonData | string,
            atlasFile: string | spine.Atlas | spine.SkeltonData,
            scale?: number);

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
        public update(dt: number);
    }
}

declare namespace spine {
    export class SkeltonData {}
    export class Atlas {}
    export class AnimationStateData {}
    export class TrackEntry {}
}
