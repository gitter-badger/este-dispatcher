(function(){var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$typeOf$$($value$$53$$) {
  var $s$$2$$ = typeof $value$$53$$;
  if ("object" == $s$$2$$) {
    if ($value$$53$$) {
      if ($value$$53$$ instanceof Array) {
        return "array";
      }
      if ($value$$53$$ instanceof Object) {
        return $s$$2$$;
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$53$$);
      if ("[object Window]" == $className$$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$$1$$ || "number" == typeof $value$$53$$.length && "undefined" != typeof $value$$53$$.splice && "undefined" != typeof $value$$53$$.propertyIsEnumerable && !$value$$53$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$53$$.call && "undefined" != typeof $value$$53$$.propertyIsEnumerable && !$value$$53$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$$2$$ && "undefined" == typeof $value$$53$$.call) {
      return "object";
    }
  }
  return $s$$2$$;
}
function $goog$isFunction$$($val$$9$$) {
  return "function" == $goog$typeOf$$($val$$9$$);
}
function $goog$isObject$$($val$$10$$) {
  var $type$$77$$ = typeof $val$$10$$;
  return "object" == $type$$77$$ && null != $val$$10$$ || "function" == $type$$77$$;
}
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$28$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$29$$) {
  if (!$fn$$1$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments);
  };
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$30$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
function $goog$partial$$($fn$$3$$, $var_args$$31$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = $args$$.slice();
    $newArgs$$1$$.push.apply($newArgs$$1$$, arguments);
    return $fn$$3$$.apply(this, $newArgs$$1$$);
  };
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.$base$ = function $$childCtor$$$$base$$($me$$, $methodName$$, $var_args$$32$$) {
    return $parentCtor$$.prototype[$methodName$$].apply($me$$, Array.prototype.slice.call(arguments, 2));
  };
}
;function $goog$debug$Error$$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
function $goog$string$subs$$($str$$12$$, $var_args$$40$$) {
  for (var $splitParts$$ = $str$$12$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}
;function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$doAssertFailure_$$($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$19$$ = "Assertion failed";
  if ($givenMessage$$) {
    var $message$$19$$ = $message$$19$$ + (": " + $givenMessage$$), $args$$3$$ = $givenArgs$$
  } else {
    $defaultMessage$$ && ($message$$19$$ += ": " + $defaultMessage$$, $args$$3$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$("" + $message$$19$$, $args$$3$$ || []);
}
function $goog$asserts$assert$$($condition$$1$$, $opt_message$$8$$, $var_args$$42$$) {
  $condition$$1$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$$8$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertString$$($value$$58$$, $opt_message$$11$$, $var_args$$45$$) {
  "string" == typeof $value$$58$$ || $goog$asserts$doAssertFailure_$$("Expected string but got %s: %s.", [$goog$typeOf$$($value$$58$$), $value$$58$$], $opt_message$$11$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertFunction$$($value$$59$$, $opt_message$$12$$, $var_args$$46$$) {
  $goog$isFunction$$($value$$59$$) || $goog$asserts$doAssertFailure_$$("Expected function but got %s: %s.", [$goog$typeOf$$($value$$59$$), $value$$59$$], $opt_message$$12$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertObject$$($value$$60$$, $opt_message$$13$$, $var_args$$47$$) {
  $goog$isObject$$($value$$60$$) || $goog$asserts$doAssertFailure_$$("Expected object but got %s: %s.", [$goog$typeOf$$($value$$60$$), $value$$60$$], $opt_message$$13$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertArray$$($value$$61$$, $opt_message$$14$$, $var_args$$48$$) {
  "array" == $goog$typeOf$$($value$$61$$) || $goog$asserts$doAssertFailure_$$("Expected array but got %s: %s.", [$goog$typeOf$$($value$$61$$), $value$$61$$], $opt_message$$14$$, Array.prototype.slice.call(arguments, 2));
}
;var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_5$$ = $goog$global$$.navigator;
  if ($navigator$$inline_5$$) {
    var $userAgent$$inline_6$$ = $navigator$$inline_5$$.userAgent;
    if ($userAgent$$inline_6$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_6$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
;function $goog$async$throwException$$($exception$$) {
  $goog$global$$.setTimeout(function() {
    throw $exception$$;
  }, 0);
}
var $goog$async$nextTick$setImmediate_$$;
function $goog$async$nextTick$getSetImmediateEmulator_$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && ($Channel$$ = function $$Channel$$$() {
    var $doc$$4_iframe_onmessage$$ = document.createElement("iframe");
    $doc$$4_iframe_onmessage$$.style.display = "none";
    $doc$$4_iframe_onmessage$$.src = "";
    document.documentElement.appendChild($doc$$4_iframe_onmessage$$);
    var $win$$ = $doc$$4_iframe_onmessage$$.contentWindow, $doc$$4_iframe_onmessage$$ = $win$$.document;
    $doc$$4_iframe_onmessage$$.open();
    $doc$$4_iframe_onmessage$$.write("");
    $doc$$4_iframe_onmessage$$.close();
    var $message$$20$$ = "callImmediate" + Math.random(), $origin$$ = "file:" == $win$$.location.protocol ? "*" : $win$$.location.protocol + "//" + $win$$.location.host, $doc$$4_iframe_onmessage$$ = $goog$bind$$(function($e$$7$$) {
      if ($e$$7$$.origin == $origin$$ || $e$$7$$.data == $message$$20$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$$.addEventListener("message", $doc$$4_iframe_onmessage$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$$.postMessage($message$$20$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE")) {
    var $channel$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
      $head$$ = $head$$.next;
      var $cb$$2$$ = $head$$.$cb$;
      $head$$.$cb$ = null;
      $cb$$2$$();
    };
    return function($cb$$3$$) {
      $tail$$.next = {$cb$:$cb$$3$$};
      $tail$$ = $tail$$.next;
      $channel$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function($cb$$4$$) {
    var $script$$2$$ = document.createElement("script");
    $script$$2$$.onreadystatechange = function $$script$$2$$$onreadystatechange$() {
      $script$$2$$.onreadystatechange = null;
      $script$$2$$.parentNode.removeChild($script$$2$$);
      $script$$2$$ = null;
      $cb$$4$$();
      $cb$$4$$ = null;
    };
    document.documentElement.appendChild($script$$2$$);
  } : function($cb$$5$$) {
    $goog$global$$.setTimeout($cb$$5$$, 0);
  };
}
;function $goog$async$run$$($callback$$34$$, $opt_context$$7$$) {
  $goog$async$run$schedule_$$ || $goog$async$run$initializeRunner_$$();
  $goog$async$run$workQueueScheduled_$$ || ($goog$async$run$schedule_$$(), $goog$async$run$workQueueScheduled_$$ = !0);
  $goog$async$run$workQueue_$$.push(new $goog$async$run$WorkItem_$$($callback$$34$$, $opt_context$$7$$));
}
var $goog$async$run$schedule_$$;
function $goog$async$run$initializeRunner_$$() {
  if ($goog$global$$.Promise && $goog$global$$.Promise.resolve) {
    var $promise$$ = $goog$global$$.Promise.resolve();
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      $promise$$.then($goog$async$run$processWorkQueue$$);
    };
  } else {
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      var $cb$$inline_11$$ = $goog$async$run$processWorkQueue$$;
      !$goog$isFunction$$($goog$global$$.setImmediate) || $goog$global$$.Window && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate ? ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($cb$$inline_11$$)) : $goog$global$$.setImmediate($cb$$inline_11$$);
    };
  }
}
var $goog$async$run$workQueueScheduled_$$ = !1, $goog$async$run$workQueue_$$ = [];
function $goog$async$run$processWorkQueue$$() {
  for (;$goog$async$run$workQueue_$$.length;) {
    var $workItems$$ = $goog$async$run$workQueue_$$;
    $goog$async$run$workQueue_$$ = [];
    for (var $i$$58$$ = 0;$i$$58$$ < $workItems$$.length;$i$$58$$++) {
      var $workItem$$ = $workItems$$[$i$$58$$];
      try {
        $workItem$$.$fn$.call($workItem$$.scope);
      } catch ($e$$8$$) {
        $goog$async$throwException$$($e$$8$$);
      }
    }
  }
  $goog$async$run$workQueueScheduled_$$ = !1;
}
function $goog$async$run$WorkItem_$$($fn$$8$$, $scope$$) {
  this.$fn$ = $fn$$8$$;
  this.scope = $scope$$;
}
;function $goog$Promise$$($resolver$$1$$, $opt_context$$8$$) {
  this.$state_$ = $goog$Promise$State_$PENDING$$;
  this.$result_$ = void 0;
  this.$callbackEntries_$ = this.$parent_$ = null;
  this.$hadUnhandledRejection_$ = this.$executing_$ = !1;
  try {
    var $self$$1$$ = this;
    $resolver$$1$$.call($opt_context$$8$$, function($value$$73$$) {
      $JSCompiler_StaticMethods_resolve_$$($self$$1$$, $goog$Promise$State_$FULFILLED$$, $value$$73$$);
    }, function($reason$$) {
      if (!($reason$$ instanceof $goog$Promise$CancellationError$$)) {
        try {
          if ($reason$$ instanceof Error) {
            throw $reason$$;
          }
          throw Error("Promise rejected.");
        } catch ($e$$9$$) {
        }
      }
      $JSCompiler_StaticMethods_resolve_$$($self$$1$$, $goog$Promise$State_$REJECTED$$, $reason$$);
    });
  } catch ($e$$10$$) {
    $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$REJECTED$$, $e$$10$$);
  }
}
var $goog$Promise$State_$PENDING$$ = 0, $goog$Promise$State_$FULFILLED$$ = 2, $goog$Promise$State_$REJECTED$$ = 3;
function $goog$Promise$all$$($promises$$1$$) {
  return new $goog$Promise$$(function($resolve$$3$$, $reject$$3$$) {
    var $toFulfill$$ = $promises$$1$$.length, $values$$4$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($index$$55$$, $value$$74$$) {
        $toFulfill$$--;
        $values$$4$$[$index$$55$$] = $value$$74$$;
        0 == $toFulfill$$ && $resolve$$3$$($values$$4$$);
      }, $onReject$$ = function $$onReject$$$($reason$$1$$) {
        $reject$$3$$($reason$$1$$);
      }, $i$$60$$ = 0, $promise$$2$$;$promise$$2$$ = $promises$$1$$[$i$$60$$];$i$$60$$++) {
        $promise$$2$$.then($goog$partial$$($onFulfill$$, $i$$60$$), $onReject$$);
      }
    } else {
      $resolve$$3$$($values$$4$$);
    }
  });
}
$goog$Promise$$.prototype.then = function $$goog$Promise$$$$then$($opt_onFulfilled$$3$$, $opt_onRejected$$3$$, $opt_context$$9$$) {
  null != $opt_onFulfilled$$3$$ && $goog$asserts$assertFunction$$($opt_onFulfilled$$3$$, "opt_onFulfilled should be a function.");
  null != $opt_onRejected$$3$$ && $goog$asserts$assertFunction$$($opt_onRejected$$3$$, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return $JSCompiler_StaticMethods_addChildPromise_$$(this, $goog$isFunction$$($opt_onFulfilled$$3$$) ? $opt_onFulfilled$$3$$ : null, $goog$isFunction$$($opt_onRejected$$3$$) ? $opt_onRejected$$3$$ : null, $opt_context$$9$$);
};
$goog$Promise$$.prototype.then = $goog$Promise$$.prototype.then;
$goog$Promise$$.prototype.$goog_Thenable = !0;
function $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_thenCatch$self$$, $onRejected$$1$$) {
  return $JSCompiler_StaticMethods_addChildPromise_$$($JSCompiler_StaticMethods_thenCatch$self$$, null, $onRejected$$1$$, void 0);
}
$goog$Promise$$.prototype.cancel = function $$goog$Promise$$$$cancel$($opt_message$$18$$) {
  this.$state_$ == $goog$Promise$State_$PENDING$$ && $goog$async$run$$(function() {
    var $err$$2$$ = new $goog$Promise$CancellationError$$($opt_message$$18$$);
    $JSCompiler_StaticMethods_cancelInternal_$$(this, $err$$2$$);
  }, this);
};
function $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $err$$3$$) {
  if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$state_$ == $goog$Promise$State_$PENDING$$) {
    if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$) {
      var $JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$ = $JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$;
      if ($JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$.$callbackEntries_$) {
        for (var $callbackEntry$$inline_29_childCount$$inline_24$$ = 0, $childIndex$$inline_25$$ = -1, $i$$inline_26$$ = 0, $child$$inline_28_entry$$inline_27$$;$child$$inline_28_entry$$inline_27$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$.$callbackEntries_$[$i$$inline_26$$];$i$$inline_26$$++) {
          if ($child$$inline_28_entry$$inline_27$$ = $child$$inline_28_entry$$inline_27$$.$child$) {
            if ($callbackEntry$$inline_29_childCount$$inline_24$$++, $child$$inline_28_entry$$inline_27$$ == $JSCompiler_StaticMethods_cancelInternal_$self$$ && ($childIndex$$inline_25$$ = $i$$inline_26$$), 0 <= $childIndex$$inline_25$$ && 1 < $callbackEntry$$inline_29_childCount$$inline_24$$) {
              break;
            }
          }
        }
        0 <= $childIndex$$inline_25$$ && ($JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$.$state_$ == $goog$Promise$State_$PENDING$$ && 1 == $callbackEntry$$inline_29_childCount$$inline_24$$ ? $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$, $err$$3$$) : ($callbackEntry$$inline_29_childCount$$inline_24$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$.$callbackEntries_$.splice($childIndex$$inline_25$$, 1)[0], $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_21$$, 
        $callbackEntry$$inline_29_childCount$$inline_24$$, $goog$Promise$State_$REJECTED$$, $err$$3$$)));
      }
    } else {
      $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $goog$Promise$State_$REJECTED$$, $err$$3$$);
    }
  }
}
function $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$, $callbackEntry$$1$$) {
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$ && $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$.length || $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$state_$ != $goog$Promise$State_$FULFILLED$$ && $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$state_$ != $goog$Promise$State_$REJECTED$$ || $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$);
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$ || ($JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$ = []);
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$.push($callbackEntry$$1$$);
}
function $JSCompiler_StaticMethods_addChildPromise_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $onFulfilled$$, $onRejected$$2$$, $opt_context$$12$$) {
  var $callbackEntry$$2$$ = {$child$:null, $onFulfilled$:null, $onRejected$:null};
  $callbackEntry$$2$$.$child$ = new $goog$Promise$$(function($resolve$$6$$, $reject$$6$$) {
    $callbackEntry$$2$$.$onFulfilled$ = $onFulfilled$$ ? function($value$$76$$) {
      try {
        var $result$$7$$ = $onFulfilled$$.call($opt_context$$12$$, $value$$76$$);
        $resolve$$6$$($result$$7$$);
      } catch ($err$$5$$) {
        $reject$$6$$($err$$5$$);
      }
    } : $resolve$$6$$;
    $callbackEntry$$2$$.$onRejected$ = $onRejected$$2$$ ? function($reason$$3$$) {
      try {
        var $result$$8$$ = $onRejected$$2$$.call($opt_context$$12$$, $reason$$3$$);
        void 0 === $result$$8$$ && $reason$$3$$ instanceof $goog$Promise$CancellationError$$ ? $reject$$6$$($reason$$3$$) : $resolve$$6$$($result$$8$$);
      } catch ($err$$6$$) {
        $reject$$6$$($err$$6$$);
      }
    } : $reject$$6$$;
  });
  $callbackEntry$$2$$.$child$.$parent_$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$$2$$);
  return $callbackEntry$$2$$.$child$;
}
$goog$Promise$$.prototype.$unblockAndFulfill_$ = function $$goog$Promise$$$$$unblockAndFulfill_$$($value$$77$$) {
  $goog$asserts$assert$$(1 == this.$state_$);
  this.$state_$ = $goog$Promise$State_$PENDING$$;
  $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$FULFILLED$$, $value$$77$$);
};
$goog$Promise$$.prototype.$unblockAndReject_$ = function $$goog$Promise$$$$$unblockAndReject_$$($reason$$4$$) {
  $goog$asserts$assert$$(1 == this.$state_$);
  this.$state_$ = $goog$Promise$State_$PENDING$$;
  $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$REJECTED$$, $reason$$4$$);
};
function $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_resolve_$self$$, $state$$1$$, $x$$54$$) {
  if ($JSCompiler_StaticMethods_resolve_$self$$.$state_$ == $goog$Promise$State_$PENDING$$) {
    if ($JSCompiler_StaticMethods_resolve_$self$$ == $x$$54$$) {
      $state$$1$$ = $goog$Promise$State_$REJECTED$$, $x$$54$$ = new TypeError("Promise cannot resolve to itself");
    } else {
      var $JSCompiler_inline_result$$2$$;
      if ($x$$54$$) {
        try {
          $JSCompiler_inline_result$$2$$ = !!$x$$54$$.$goog_Thenable;
        } catch ($e$$inline_32$$) {
          $JSCompiler_inline_result$$2$$ = !1;
        }
      } else {
        $JSCompiler_inline_result$$2$$ = !1;
      }
      if ($JSCompiler_inline_result$$2$$) {
        $JSCompiler_StaticMethods_resolve_$self$$.$state_$ = 1;
        $x$$54$$.then($JSCompiler_StaticMethods_resolve_$self$$.$unblockAndFulfill_$, $JSCompiler_StaticMethods_resolve_$self$$.$unblockAndReject_$, $JSCompiler_StaticMethods_resolve_$self$$);
        return;
      }
      if ($goog$isObject$$($x$$54$$)) {
        try {
          var $then$$ = $x$$54$$.then;
          if ($goog$isFunction$$($then$$)) {
            $JSCompiler_StaticMethods_tryThen_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$$54$$, $then$$);
            return;
          }
        } catch ($e$$11$$) {
          $state$$1$$ = $goog$Promise$State_$REJECTED$$, $x$$54$$ = $e$$11$$;
        }
      }
    }
    $JSCompiler_StaticMethods_resolve_$self$$.$result_$ = $x$$54$$;
    $JSCompiler_StaticMethods_resolve_$self$$.$state_$ = $state$$1$$;
    $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_resolve_$self$$);
    $state$$1$$ != $goog$Promise$State_$REJECTED$$ || $x$$54$$ instanceof $goog$Promise$CancellationError$$ || $goog$Promise$addUnhandledRejection_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$$54$$);
  }
}
function $JSCompiler_StaticMethods_tryThen_$$($JSCompiler_StaticMethods_tryThen_$self$$, $thenable$$, $then$$1$$) {
  function $reject$$7$$($reason$$5$$) {
    $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$unblockAndReject_$($reason$$5$$));
  }
  function $resolve$$7$$($value$$78$$) {
    $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$unblockAndFulfill_$($value$$78$$));
  }
  $JSCompiler_StaticMethods_tryThen_$self$$.$state_$ = 1;
  var $called$$1$$ = !1;
  try {
    $then$$1$$.call($thenable$$, $resolve$$7$$, $reject$$7$$);
  } catch ($e$$12$$) {
    $reject$$7$$($e$$12$$);
  }
}
function $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$) {
  $JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$executing_$ || ($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$executing_$ = !0, $goog$async$run$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$executeCallbacks_$, $JSCompiler_StaticMethods_scheduleCallbacks_$self$$));
}
$goog$Promise$$.prototype.$executeCallbacks_$ = function $$goog$Promise$$$$$executeCallbacks_$$() {
  for (;this.$callbackEntries_$ && this.$callbackEntries_$.length;) {
    var $entries$$ = this.$callbackEntries_$;
    this.$callbackEntries_$ = [];
    for (var $i$$63$$ = 0;$i$$63$$ < $entries$$.length;$i$$63$$++) {
      $JSCompiler_StaticMethods_executeCallback_$$(this, $entries$$[$i$$63$$], this.$state_$, this.$result_$);
    }
  }
  this.$executing_$ = !1;
};
function $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_executeCallback_$self_p$$inline_35$$, $callbackEntry$$3$$, $state$$2$$, $result$$9$$) {
  if ($state$$2$$ == $goog$Promise$State_$FULFILLED$$) {
    $callbackEntry$$3$$.$onFulfilled$($result$$9$$);
  } else {
    for (;$JSCompiler_StaticMethods_executeCallback_$self_p$$inline_35$$ && $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_35$$.$hadUnhandledRejection_$;$JSCompiler_StaticMethods_executeCallback_$self_p$$inline_35$$ = $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_35$$.$parent_$) {
      $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_35$$.$hadUnhandledRejection_$ = !1;
    }
    $callbackEntry$$3$$.$onRejected$($result$$9$$);
  }
}
function $goog$Promise$addUnhandledRejection_$$($promise$$7$$, $reason$$6$$) {
  $promise$$7$$.$hadUnhandledRejection_$ = !0;
  $goog$async$run$$(function() {
    $promise$$7$$.$hadUnhandledRejection_$ && $goog$Promise$handleRejection_$$.call(null, $reason$$6$$);
  });
}
var $goog$Promise$handleRejection_$$ = $goog$async$throwException$$;
function $goog$Promise$CancellationError$$($opt_message$$19$$) {
  $goog$debug$Error$$.call(this, $opt_message$$19$$);
}
$goog$inherits$$($goog$Promise$CancellationError$$, $goog$debug$Error$$);
$goog$Promise$CancellationError$$.prototype.name = "cancel";
function $este$Dispatcher$$() {
  this.$callbacks_$ = [];
}
$JSCompiler_prototypeAlias$$ = $este$Dispatcher$$.prototype;
$JSCompiler_prototypeAlias$$.$pendingId_$ = 0;
$JSCompiler_prototypeAlias$$.$dependingIds_$ = null;
$JSCompiler_prototypeAlias$$.register = function $$JSCompiler_prototypeAlias$$$register$($callback$$36$$) {
  $goog$asserts$assertFunction$$($callback$$36$$);
  return this.$callbacks_$.push($callback$$36$$) - 1;
};
$JSCompiler_prototypeAlias$$.$unregister$ = function $$JSCompiler_prototypeAlias$$$$unregister$$($id$$4$$) {
  $JSCompiler_StaticMethods_assertCallbackId_$$(this, $id$$4$$);
  return delete this.$callbacks_$[$id$$4$$];
};
$JSCompiler_prototypeAlias$$.$onError$ = function $$JSCompiler_prototypeAlias$$$$onError$$() {
};
function $JSCompiler_StaticMethods_assertCallbackId_$$($JSCompiler_StaticMethods_assertCallbackId_$self$$, $id$$5$$) {
  $goog$asserts$assertFunction$$($JSCompiler_StaticMethods_assertCallbackId_$self$$.$callbacks_$[$id$$5$$], "" + $id$$5$$ + " does not map to a registered callback.");
}
$JSCompiler_prototypeAlias$$.$dispatch$ = function $$JSCompiler_prototypeAlias$$$$dispatch$$($action$$1$$, $payload$$) {
  $goog$asserts$assert$$(!this.$isDispatching_$, "Cannot dispatch in the middle of a dispatch.");
  $goog$asserts$assertString$$($action$$1$$);
  $goog$asserts$assertObject$$($payload$$);
  this.$isDispatching_$ = !0;
  this.$resolves_$ = [];
  this.$rejects_$ = [];
  this.$dependingIds_$ = {};
  $JSCompiler_StaticMethods_createPromisesForCallbacks_$$(this);
  $JSCompiler_StaticMethods_runCallbacks_$$(this, $action$$1$$, $payload$$);
  this.$isDispatching_$ = !1;
  return $goog$Promise$all$$(this.$promises_$);
};
function $JSCompiler_StaticMethods_createPromisesForCallbacks_$$($JSCompiler_StaticMethods_createPromisesForCallbacks_$self$$) {
  $JSCompiler_StaticMethods_createPromisesForCallbacks_$self$$.$promises_$ = $JSCompiler_StaticMethods_createPromisesForCallbacks_$self$$.$callbacks_$.map(function($_this$$) {
    return function($callback$$37$$, $i$$65$$) {
      return new $goog$Promise$$(function($resolve$$9$$, $reject$$9$$) {
        $_this$$.$resolves_$[$i$$65$$] = $resolve$$9$$;
        $_this$$.$rejects_$[$i$$65$$] = $reject$$9$$;
      });
    };
  }($JSCompiler_StaticMethods_createPromisesForCallbacks_$self$$));
}
function $JSCompiler_StaticMethods_runCallbacks_$$($JSCompiler_StaticMethods_runCallbacks_$self$$, $action$$2$$, $payload$$1$$) {
  $JSCompiler_StaticMethods_runCallbacks_$self$$.$callbacks_$.forEach(function($_this$$1$$) {
    return function($callback$$38$$, $id$$6$$) {
      return $JSCompiler_StaticMethods_thenCatch$$((new $goog$Promise$$(function($resolve$$10$$) {
        $_this$$1$$.$pendingId_$ = $id$$6$$;
        return $resolve$$10$$($callback$$38$$($action$$2$$, $payload$$1$$));
      })).then(function() {
        return $_this$$1$$.$resolves_$[$id$$6$$]($payload$$1$$);
      }), function($reason$$8$$) {
        $_this$$1$$.$rejects_$[$id$$6$$]($reason$$8$$);
      });
    };
  }($JSCompiler_StaticMethods_runCallbacks_$self$$));
}
$JSCompiler_prototypeAlias$$.$waitFor$ = function $$JSCompiler_prototypeAlias$$$$waitFor$$($ids$$) {
  var $dependency$$;
  $goog$asserts$assert$$(this.$isDispatching_$, "Must be invoked while dispatching.");
  $goog$asserts$assertArray$$($ids$$);
  $dependency$$ = $JSCompiler_StaticMethods_detectCircularDependency_$$(this, this.$pendingId_$, $ids$$, []);
  $goog$asserts$assert$$(!$dependency$$.length, "Circular dependency detected: " + $dependency$$.join(" - "));
  this.$dependingIds_$[this.$pendingId_$] = $ids$$;
  return $goog$Promise$all$$($ids$$.map(function($_this$$2$$) {
    return function($id$$7$$) {
      $JSCompiler_StaticMethods_assertCallbackId_$$($_this$$2$$, $id$$7$$);
      return $_this$$2$$.$promises_$[$id$$7$$];
    };
  }(this)));
};
function $JSCompiler_StaticMethods_detectCircularDependency_$$($JSCompiler_StaticMethods_detectCircularDependency_$self$$, $_i_id$$8$$, $_len_deps$$2$$, $list$$) {
  var $depId_dependency$$1$$, $_ref$$;
  $list$$.push($_i_id$$8$$);
  $_ref$$ = $_len_deps$$2$$ || [];
  $_i_id$$8$$ = 0;
  for ($_len_deps$$2$$ = $_ref$$.length;$_i_id$$8$$ < $_len_deps$$2$$;$_i_id$$8$$++) {
    $depId_dependency$$1$$ = $_ref$$[$_i_id$$8$$];
    if ($depId_dependency$$1$$ === $JSCompiler_StaticMethods_detectCircularDependency_$self$$.$pendingId_$) {
      return $list$$.concat($depId_dependency$$1$$);
    }
    $depId_dependency$$1$$ = $JSCompiler_StaticMethods_detectCircularDependency_$$($JSCompiler_StaticMethods_detectCircularDependency_$self$$, $depId_dependency$$1$$, $JSCompiler_StaticMethods_detectCircularDependency_$self$$.$dependingIds_$[$depId_dependency$$1$$], $list$$.slice(0));
    if ($depId_dependency$$1$$.length) {
      return $depId_dependency$$1$$;
    }
  }
  return[];
}
;var $parts$$inline_68$$ = ["este", "Dispatcher"], $cur$$inline_69$$ = $goog$global$$;
$parts$$inline_68$$[0] in $cur$$inline_69$$ || !$cur$$inline_69$$.execScript || $cur$$inline_69$$.execScript("var " + $parts$$inline_68$$[0]);
for (var $part$$inline_70$$;$parts$$inline_68$$.length && ($part$$inline_70$$ = $parts$$inline_68$$.shift());) {
  $parts$$inline_68$$.length || void 0 === $este$Dispatcher$$ ? $cur$$inline_69$$ = $cur$$inline_69$$[$part$$inline_70$$] ? $cur$$inline_69$$[$part$$inline_70$$] : $cur$$inline_69$$[$part$$inline_70$$] = {} : $cur$$inline_69$$[$part$$inline_70$$] = $este$Dispatcher$$;
}
$este$Dispatcher$$.prototype.register = $este$Dispatcher$$.prototype.register;
$este$Dispatcher$$.prototype.unregister = $este$Dispatcher$$.prototype.$unregister$;
$este$Dispatcher$$.prototype.onError = $este$Dispatcher$$.prototype.$onError$;
$este$Dispatcher$$.prototype.dispatch = $este$Dispatcher$$.prototype.$dispatch$;
$este$Dispatcher$$.prototype.waitFor = $este$Dispatcher$$.prototype.$waitFor$;
})();
;module.exports = este.Dispatcher;