/*******************************************************************************
 * Copyright 2022 Silicon Laboratories Inc. www.silabs.com
 *******************************************************************************
 *
 * The licensor of this software is Silicon Laboratories Inc. Your use of this
 * software is governed by the terms of Silicon Labs Master Software License
 * Agreement (MSLA) available at
 * www.silabs.com/about-us/legal/master-software-license-agreement. This
 * software is distributed to you in Source Code format and is governed by the
 * sections of the MSLA applicable to Source Code.
 *
 ******************************************************************************/

import { dir } from "console";

// The purpose of this module is to provide apack.json integration.
// It locates and parses the apack.json file, and then further it
// is able to execute given functions from inside the file.

// Class that describes an adapter pack
class AdapterPack {
  directory: String;

  constructor(directory: String) {
    this.directory = directory
  }

  executeFunction(functionName: String, ...args: String[]) {

  }
}

// This function reads the adapter pack from the specified directory.
export function readAdapterPack(directory: String): AdapterPack { 
  return new AdapterPack(directory)
}

