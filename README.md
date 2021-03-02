# Design Patterns with TypeScript.

## Behavioral Patterns

### Memento

Sometimes it's necessary to record the internal state of an object. This is required when implementing checkpoints and undo mechanisms that let users back out of tentative operations or recover from errors.

### State

Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

* An object's behavior depends on its state, and it must change its behavior at run-time depending on that state.
* Operations have large, multipart conditional statements that depend on the
  object's state. This state usually represented by one or more enumerated constants.
  Often, several operations will contain this same conditional in a separate class.
  This lets you treat the object's statew as an object in its own right that can
  vary independently from other objects.