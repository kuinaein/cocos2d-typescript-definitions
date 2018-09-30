/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    export class Particle {}

    export class ParticleSystem extends Node {
        public constructor(plistFile: string|number);
        public addParticle(): boolean;
        public clone(): ParticleSystem;
        public destroyParticleSystem();

        public getAngle(): number;
        public getAngleVar(): number;
        public getAtlasIndex(): number;
        public getBatchNode(): ParticleBatchNode;
        public getBlendFunc(): BlendFunc;
        public getDrawMode(): number;
        public getDuration(): number;
        public getEmissionRate(): number;
        public getEmitterMode(): number;
        public getEndColor(): Color;
        public getEndColorVar(): Color;
        public getEndRadius(): number;
        public getEndRadiusVar(): number;
        public getEndSize(): number;
        public getEndSizeVar(): number;
        public getEndSpin(): number;
        public getEndSpinVar(): number;
        public getGravity(): Point;
        public getLife(): number;
        public getLifeVar(): number;
        public getParticleCount(): number;
        public getPositionType(): number;
        public getPosVar(): Point|object
        public getRadialAccel(): Point|object;
        public getRadialAccelVar(): number;
        public getRotatePerSecond(): number;
        public getRotatePerSecondVar(): number;
        public getRotationIsDir(): boolean;
        public getShapeType(): number;
        public getSourcePosition(): Point|object;
        public getSpeed(): Point|object;
        public getSpeedVar(): number;
        public getStartColor(): Color;
        public getStartColorVar(): Color;
        public getStartRadius(): number;
        public getStartRadiusVar(): number;
        public getStartSize(): number;
        public getStartSizeVar(): number;
        public getStartSpin(): number;
        public getStartSpinVar(): number;
        public getTangentialAccel(): number;
        public getTangentialAccelVar(): number;
        public getTexture(): Texture2D;
        public getTotalParticles(): number;

        public ignoreColor(ignore: boolean);
        public init();
        public initParticle(particle: Particle);
        public initTexCoordsWithRect(pointRect: Rect);
        public initWithDictionary(dictionary: object, dirname: string): boolean;
        public initWithFile(plistFile: string): boolean;
        public initWithTotalParticles(numberOfParticles: number): boolean;
        public isActive(): boolean;
        public isAutoRemoveOnFinish(): boolean;
        public isBlendAdditive(): boolean;
        public isFull(): boolean;
        public isOpacityModifyRGB(): boolean;
        public listenBackToForeground(obj: Class);
        public postStep();
        public resetSystem();

        public setAngle(angle: number);
        public setAngleVar(angleVar: number);
        public setAtlasIndex(atlasIndex: number);
        public setAutoRemoveOnFinish(isAutoRemoveOnFinish: boolean);
        public setBatchNode(batchNode: ParticleBatchNode);
        public setBlendAdditive(isBlendAdditive: boolean);
        public setBlendFunc(src: number, dst: number);
        public setDisplayFrame(spriteFrame: SpriteFrame);
        public setDrawMode(drawMode: number);
        public setDuration(duration: number);
        public setEmissionRate(emissionRate: number);
        public setEmitterMode(emitterMode: number);
        public setEndColor(endColor: Color);
        public setEndColorVar(endColorVar: Color);
        public setEndRadius(endRadius: number);
        public setEndRadiusVar(endRadiusVar: number);
        public setEndSize(endSize: number);
        public setEndSizeVar(endSizeVar: number);
        public setEndSpin(endSpin: number);
        public setEndSpinVar(endSpinVar: number);
        public setGravity(gravity: Point);
        public setLife(life: number);
        public setLifeVar(lifeVar: number);
        public setOpacityModifyRGB(newValue: boolean);
        public setParticleCount(particleCount: number);
        public setPositionType(positionType: number);
        public setPosVar(posVar: Point);
        public setRadialAccel(radialAccel: number);
        public setRadialAccelVar(radialAccelVar: number);
        public setRotatePerSecond(degrees: number);
        public setRotatePerSecondVar(degrees: number);
        public setRotationIsDir(t: boolean);
        public setShapeType(shapeType: number);
        public setSourcePosition(sourcePosition: Point|object);
        public setSpeed(speed: number);
        public setSpeedVar(speedVar: number);
        public setStartColor(startColor: Color);
        public setStartColorVar(startColorVar: Color);
        public setStartRadius(startRadius: number);
        public setStartRadiusVar(startRadiusVar: number);
        public setStartSize(startSize: number);
        public setStartSizeVar(startSizeVar: number);
        public setStartSpin(startSpin: number);
        public setStartSpinVar(startSpinVar: number);
        public setTangentialAccel(tangentialAccel: number);
        public setTangentialAccelVar(tangentialAccelVar: number);
        public setTexture(texture: Texture2D);
        public setTextureWithRect(texture: Texture2D, rect: Rect);
        public setTotalParticles(tp: number);

        public stopSystem();
        public updateQuadWithParticle(particle: Particle, newPosition: Point);
        public updateWithNoTime();
    }

    export class ParticleBatchNode extends ParticleSystem {}
    export class ParticleExplosion extends ParticleSystem {}
    export class ParticleFire extends ParticleSystem {}
    export class ParticleFireworks extends ParticleSystem {}
    export class ParticleFlower extends ParticleSystem {}
    export class ParticleGalaxy extends ParticleSystem {}
    export class ParticleMeteor extends ParticleSystem {}
    export class ParticleRain extends ParticleSystem {}
    export class ParticleSmoke extends ParticleSystem {}
    export class ParticleSnow extends ParticleSystem {}
    export class ParticleSpiral extends ParticleSystem {}
    export class ParticleSun extends ParticleSystem {}
}
