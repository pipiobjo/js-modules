## Release von JS Modules

- vorbereitung für die Release
(incrementPatch=0.0.1, incrementMinor=0.1.0, incrementMajor=1.0.0)
```
gradlew createRelease -PRELEASE.versionIncrementer=incrementPatch
```
- startet Release-Branch nach Git-Flow
```
gradlew startRelease
```
- Version update von package.json nach axion Versioning plugin
```
gradlew updateVersionsInPackageJson
```
- deploy Artifact in Nexus
```
gradlew uploadArtifacts
```
- finish Release nach Git-Flow und deploy Artifact in Nexus
```
gradlew finishRelease
```

- publish all tags nach Git Flow
```
gradlew pushAll
```
versionincrement Test