# __TYPE-EQUALITY README__

### __Description:__ A ES6 package that check equality with types by stricts and normals

# IsEqualTo
### Check equality with types such as normals, stricts and default


```javascript 
IsEqualTo.Stricts("1", 1); //false
IsEqualTo.Normals("1", 1); //true
IsEqualTo.Default("1", 1); //Default Mode is "Normals" //true 
IsEqualTo.Mode = "Normals"; //Set Mode to Normals
```

# IsNotEqualTo
### Check inequality with types such as normals, stricts and default

```javascript
IsNotEqualTo.Stricts("1", 1); //true
IsNotEqualTo.Normals("1", 1); //false
IsNotEqualTo.Default("1", 1); //Default Mode is "Normals" //false
IsNotEqualTo.Mode = "Normals"; //Set Mode to Normals
```

# SetDefaultTo
### Set Mode to all EqualTo to mode such as normals, stricts

```javascript
SetDefaultTo("Normals"); //Set IsEqualTo & IsNotEqualTo = Normals
SetDefaultTo("Stricts"); //Set IsEqualTo & IsNotEqualTo = Stricts
SetDefaultTo("Invalid"); //TypeError: Invalid SetDefaultTo Mode
```

# ShowDefault
### Log IsEqaulTo & IsNotEqualTo Mode

```javascript
ShowDefault(true); // IsEquaTo: <Mode> IsNotEqualTo: <Mode>
ShowDefault(false);
ShowDefault("Invalid"); //TypeError: Invalid SetDefaultTo Mode
```

# TypErr (Bonus Function)
### Throw TypeError with argument's message with string(recommended)

```javascript
TypErr("Hello"); //TypeError: Hello
```