/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  containsBytes,
  getU8Encoder,
  type Address,
  type ReadonlyUint8Array,
} from '@solana/web3.js';
import {
  type ParsedAmountToUiAmountInstruction,
  type ParsedApplyConfidentialPendingBalanceInstruction,
  type ParsedApproveCheckedInstruction,
  type ParsedApproveConfidentialTransferAccountInstruction,
  type ParsedApproveInstruction,
  type ParsedBurnCheckedInstruction,
  type ParsedBurnInstruction,
  type ParsedCloseAccountInstruction,
  type ParsedConfidentialDepositInstruction,
  type ParsedConfidentialTransferInstruction,
  type ParsedConfidentialTransferWithFeeInstruction,
  type ParsedConfidentialWithdrawInstruction,
  type ParsedConfigureConfidentialTransferAccountInstruction,
  type ParsedDisableConfidentialCreditsInstruction,
  type ParsedDisableMemoTransfersInstruction,
  type ParsedDisableNonConfidentialCreditsInstruction,
  type ParsedEmitTokenMetadataInstruction,
  type ParsedEmptyConfidentialTransferAccountInstruction,
  type ParsedEnableConfidentialCreditsInstruction,
  type ParsedEnableMemoTransfersInstruction,
  type ParsedEnableNonConfidentialCreditsInstruction,
  type ParsedFreezeAccountInstruction,
  type ParsedGetAccountDataSizeInstruction,
  type ParsedHarvestWithheldTokensToMintInstruction,
  type ParsedInitializeAccount2Instruction,
  type ParsedInitializeAccount3Instruction,
  type ParsedInitializeAccountInstruction,
  type ParsedInitializeConfidentialTransferMintInstruction,
  type ParsedInitializeDefaultAccountStateInstruction,
  type ParsedInitializeGroupMemberPointerInstruction,
  type ParsedInitializeGroupPointerInstruction,
  type ParsedInitializeImmutableOwnerInstruction,
  type ParsedInitializeMetadataPointerInstruction,
  type ParsedInitializeMint2Instruction,
  type ParsedInitializeMintCloseAuthorityInstruction,
  type ParsedInitializeMintInstruction,
  type ParsedInitializeMultisig2Instruction,
  type ParsedInitializeMultisigInstruction,
  type ParsedInitializeTokenGroupInstruction,
  type ParsedInitializeTokenMetadataInstruction,
  type ParsedInitializeTransferFeeConfigInstruction,
  type ParsedMintToCheckedInstruction,
  type ParsedMintToInstruction,
  type ParsedReallocateInstruction,
  type ParsedRemoveTokenMetadataKeyInstruction,
  type ParsedRevokeInstruction,
  type ParsedSetAuthorityInstruction,
  type ParsedSetTransferFeeInstruction,
  type ParsedSyncNativeInstruction,
  type ParsedThawAccountInstruction,
  type ParsedTransferCheckedInstruction,
  type ParsedTransferCheckedWithFeeInstruction,
  type ParsedTransferInstruction,
  type ParsedUiAmountToAmountInstruction,
  type ParsedUpdateConfidentialTransferMintInstruction,
  type ParsedUpdateDefaultAccountStateInstruction,
  type ParsedUpdateGroupMemberPointerInstruction,
  type ParsedUpdateGroupPointerInstruction,
  type ParsedUpdateMetadataPointerInstruction,
  type ParsedUpdateTokenMetadataFieldInstruction,
  type ParsedUpdateTokenMetadataUpdateAuthorityInstruction,
  type ParsedWithdrawWithheldTokensFromAccountsInstruction,
  type ParsedWithdrawWithheldTokensFromMintInstruction,
} from '../instructions';

export const TOKEN_2022_PROGRAM_ADDRESS =
  'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;

export enum Token2022Account {
  Mint,
  Token,
  Multisig,
}

export function identifyToken2022Account(
  account: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): Token2022Account {
  const data = 'data' in account ? account.data : account;
  if (data.length === 82) {
    return Token2022Account.Mint;
  }
  if (data.length === 165) {
    return Token2022Account.Token;
  }
  if (data.length === 355) {
    return Token2022Account.Multisig;
  }
  throw new Error(
    'The provided account could not be identified as a token-2022 account.'
  );
}

export enum Token2022Instruction {
  InitializeMint,
  InitializeAccount,
  InitializeMultisig,
  Transfer,
  Approve,
  Revoke,
  SetAuthority,
  MintTo,
  Burn,
  CloseAccount,
  FreezeAccount,
  ThawAccount,
  TransferChecked,
  ApproveChecked,
  MintToChecked,
  BurnChecked,
  InitializeAccount2,
  SyncNative,
  InitializeAccount3,
  InitializeMultisig2,
  InitializeMint2,
  GetAccountDataSize,
  InitializeImmutableOwner,
  AmountToUiAmount,
  UiAmountToAmount,
  InitializeMintCloseAuthority,
  InitializeTransferFeeConfig,
  TransferCheckedWithFee,
  WithdrawWithheldTokensFromMint,
  WithdrawWithheldTokensFromAccounts,
  HarvestWithheldTokensToMint,
  SetTransferFee,
  InitializeConfidentialTransferMint,
  UpdateConfidentialTransferMint,
  ConfigureConfidentialTransferAccount,
  ApproveConfidentialTransferAccount,
  EmptyConfidentialTransferAccount,
  ConfidentialDeposit,
  ConfidentialWithdraw,
  ConfidentialTransfer,
  ApplyConfidentialPendingBalance,
  EnableConfidentialCredits,
  DisableConfidentialCredits,
  EnableNonConfidentialCredits,
  DisableNonConfidentialCredits,
  ConfidentialTransferWithFee,
  InitializeDefaultAccountState,
  UpdateDefaultAccountState,
  Reallocate,
  EnableMemoTransfers,
  DisableMemoTransfers,
  InitializeMetadataPointer,
  UpdateMetadataPointer,
  InitializeGroupPointer,
  UpdateGroupPointer,
  InitializeGroupMemberPointer,
  UpdateGroupMemberPointer,
  InitializeTokenMetadata,
  UpdateTokenMetadataField,
  RemoveTokenMetadataKey,
  UpdateTokenMetadataUpdateAuthority,
  EmitTokenMetadata,
  InitializeTokenGroup,
}

export function identifyToken2022Instruction(
  instruction: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): Token2022Instruction {
  const data = 'data' in instruction ? instruction.data : instruction;
  if (containsBytes(data, getU8Encoder().encode(0), 0)) {
    return Token2022Instruction.InitializeMint;
  }
  if (containsBytes(data, getU8Encoder().encode(1), 0)) {
    return Token2022Instruction.InitializeAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(2), 0)) {
    return Token2022Instruction.InitializeMultisig;
  }
  if (containsBytes(data, getU8Encoder().encode(3), 0)) {
    return Token2022Instruction.Transfer;
  }
  if (containsBytes(data, getU8Encoder().encode(4), 0)) {
    return Token2022Instruction.Approve;
  }
  if (containsBytes(data, getU8Encoder().encode(5), 0)) {
    return Token2022Instruction.Revoke;
  }
  if (containsBytes(data, getU8Encoder().encode(6), 0)) {
    return Token2022Instruction.SetAuthority;
  }
  if (containsBytes(data, getU8Encoder().encode(7), 0)) {
    return Token2022Instruction.MintTo;
  }
  if (containsBytes(data, getU8Encoder().encode(8), 0)) {
    return Token2022Instruction.Burn;
  }
  if (containsBytes(data, getU8Encoder().encode(9), 0)) {
    return Token2022Instruction.CloseAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(10), 0)) {
    return Token2022Instruction.FreezeAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(11), 0)) {
    return Token2022Instruction.ThawAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(12), 0)) {
    return Token2022Instruction.TransferChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(13), 0)) {
    return Token2022Instruction.ApproveChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(14), 0)) {
    return Token2022Instruction.MintToChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(15), 0)) {
    return Token2022Instruction.BurnChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(16), 0)) {
    return Token2022Instruction.InitializeAccount2;
  }
  if (containsBytes(data, getU8Encoder().encode(17), 0)) {
    return Token2022Instruction.SyncNative;
  }
  if (containsBytes(data, getU8Encoder().encode(18), 0)) {
    return Token2022Instruction.InitializeAccount3;
  }
  if (containsBytes(data, getU8Encoder().encode(19), 0)) {
    return Token2022Instruction.InitializeMultisig2;
  }
  if (containsBytes(data, getU8Encoder().encode(20), 0)) {
    return Token2022Instruction.InitializeMint2;
  }
  if (containsBytes(data, getU8Encoder().encode(21), 0)) {
    return Token2022Instruction.GetAccountDataSize;
  }
  if (containsBytes(data, getU8Encoder().encode(22), 0)) {
    return Token2022Instruction.InitializeImmutableOwner;
  }
  if (containsBytes(data, getU8Encoder().encode(23), 0)) {
    return Token2022Instruction.AmountToUiAmount;
  }
  if (containsBytes(data, getU8Encoder().encode(24), 0)) {
    return Token2022Instruction.UiAmountToAmount;
  }
  if (containsBytes(data, getU8Encoder().encode(25), 0)) {
    return Token2022Instruction.InitializeMintCloseAuthority;
  }
  if (
    containsBytes(data, getU8Encoder().encode(26), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.InitializeTransferFeeConfig;
  }
  if (
    containsBytes(data, getU8Encoder().encode(26), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.TransferCheckedWithFee;
  }
  if (
    containsBytes(data, getU8Encoder().encode(26), 0) &&
    containsBytes(data, getU8Encoder().encode(2), 1)
  ) {
    return Token2022Instruction.WithdrawWithheldTokensFromMint;
  }
  if (
    containsBytes(data, getU8Encoder().encode(26), 0) &&
    containsBytes(data, getU8Encoder().encode(3), 1)
  ) {
    return Token2022Instruction.WithdrawWithheldTokensFromAccounts;
  }
  if (
    containsBytes(data, getU8Encoder().encode(26), 0) &&
    containsBytes(data, getU8Encoder().encode(4), 1)
  ) {
    return Token2022Instruction.HarvestWithheldTokensToMint;
  }
  if (
    containsBytes(data, getU8Encoder().encode(26), 0) &&
    containsBytes(data, getU8Encoder().encode(5), 1)
  ) {
    return Token2022Instruction.SetTransferFee;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.InitializeConfidentialTransferMint;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.UpdateConfidentialTransferMint;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(2), 1)
  ) {
    return Token2022Instruction.ConfigureConfidentialTransferAccount;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(3), 1)
  ) {
    return Token2022Instruction.ApproveConfidentialTransferAccount;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(4), 1)
  ) {
    return Token2022Instruction.EmptyConfidentialTransferAccount;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(5), 1)
  ) {
    return Token2022Instruction.ConfidentialDeposit;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(6), 1)
  ) {
    return Token2022Instruction.ConfidentialWithdraw;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(7), 1)
  ) {
    return Token2022Instruction.ConfidentialTransfer;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(8), 1)
  ) {
    return Token2022Instruction.ApplyConfidentialPendingBalance;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(9), 1)
  ) {
    return Token2022Instruction.EnableConfidentialCredits;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(10), 1)
  ) {
    return Token2022Instruction.DisableConfidentialCredits;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(11), 1)
  ) {
    return Token2022Instruction.EnableNonConfidentialCredits;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(12), 1)
  ) {
    return Token2022Instruction.DisableNonConfidentialCredits;
  }
  if (
    containsBytes(data, getU8Encoder().encode(27), 0) &&
    containsBytes(data, getU8Encoder().encode(13), 1)
  ) {
    return Token2022Instruction.ConfidentialTransferWithFee;
  }
  if (
    containsBytes(data, getU8Encoder().encode(28), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.InitializeDefaultAccountState;
  }
  if (
    containsBytes(data, getU8Encoder().encode(28), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.UpdateDefaultAccountState;
  }
  if (containsBytes(data, getU8Encoder().encode(29), 0)) {
    return Token2022Instruction.Reallocate;
  }
  if (
    containsBytes(data, getU8Encoder().encode(30), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.EnableMemoTransfers;
  }
  if (
    containsBytes(data, getU8Encoder().encode(30), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.DisableMemoTransfers;
  }
  if (
    containsBytes(data, getU8Encoder().encode(39), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.InitializeMetadataPointer;
  }
  if (
    containsBytes(data, getU8Encoder().encode(39), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.UpdateMetadataPointer;
  }
  if (
    containsBytes(data, getU8Encoder().encode(40), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.InitializeGroupPointer;
  }
  if (
    containsBytes(data, getU8Encoder().encode(40), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.UpdateGroupPointer;
  }
  if (
    containsBytes(data, getU8Encoder().encode(41), 0) &&
    containsBytes(data, getU8Encoder().encode(0), 1)
  ) {
    return Token2022Instruction.InitializeGroupMemberPointer;
  }
  if (
    containsBytes(data, getU8Encoder().encode(41), 0) &&
    containsBytes(data, getU8Encoder().encode(1), 1)
  ) {
    return Token2022Instruction.UpdateGroupMemberPointer;
  }
  if (
    containsBytes(
      data,
      new Uint8Array([210, 225, 30, 162, 88, 184, 77, 141]),
      0
    )
  ) {
    return Token2022Instruction.InitializeTokenMetadata;
  }
  if (
    containsBytes(
      data,
      new Uint8Array([221, 233, 49, 45, 181, 202, 220, 200]),
      0
    )
  ) {
    return Token2022Instruction.UpdateTokenMetadataField;
  }
  if (
    containsBytes(data, new Uint8Array([234, 18, 32, 56, 89, 141, 37, 181]), 0)
  ) {
    return Token2022Instruction.RemoveTokenMetadataKey;
  }
  if (
    containsBytes(
      data,
      new Uint8Array([215, 228, 166, 228, 84, 100, 86, 123]),
      0
    )
  ) {
    return Token2022Instruction.UpdateTokenMetadataUpdateAuthority;
  }
  if (
    containsBytes(
      data,
      new Uint8Array([250, 166, 180, 250, 13, 12, 184, 70]),
      0
    )
  ) {
    return Token2022Instruction.EmitTokenMetadata;
  }
  if (
    containsBytes(data, new Uint8Array([121, 113, 108, 39, 54, 51, 0, 4]), 0)
  ) {
    return Token2022Instruction.InitializeTokenGroup;
  }
  throw new Error(
    'The provided instruction could not be identified as a token-2022 instruction.'
  );
}

export type ParsedToken2022Instruction<
  TProgram extends string = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
> =
  | ({
      instructionType: Token2022Instruction.InitializeMint;
    } & ParsedInitializeMintInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeAccount;
    } & ParsedInitializeAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeMultisig;
    } & ParsedInitializeMultisigInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.Transfer;
    } & ParsedTransferInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.Approve;
    } & ParsedApproveInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.Revoke;
    } & ParsedRevokeInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.SetAuthority;
    } & ParsedSetAuthorityInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.MintTo;
    } & ParsedMintToInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.Burn;
    } & ParsedBurnInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.CloseAccount;
    } & ParsedCloseAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.FreezeAccount;
    } & ParsedFreezeAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ThawAccount;
    } & ParsedThawAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.TransferChecked;
    } & ParsedTransferCheckedInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ApproveChecked;
    } & ParsedApproveCheckedInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.MintToChecked;
    } & ParsedMintToCheckedInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.BurnChecked;
    } & ParsedBurnCheckedInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeAccount2;
    } & ParsedInitializeAccount2Instruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.SyncNative;
    } & ParsedSyncNativeInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeAccount3;
    } & ParsedInitializeAccount3Instruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeMultisig2;
    } & ParsedInitializeMultisig2Instruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeMint2;
    } & ParsedInitializeMint2Instruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.GetAccountDataSize;
    } & ParsedGetAccountDataSizeInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeImmutableOwner;
    } & ParsedInitializeImmutableOwnerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.AmountToUiAmount;
    } & ParsedAmountToUiAmountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UiAmountToAmount;
    } & ParsedUiAmountToAmountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeMintCloseAuthority;
    } & ParsedInitializeMintCloseAuthorityInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeTransferFeeConfig;
    } & ParsedInitializeTransferFeeConfigInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.TransferCheckedWithFee;
    } & ParsedTransferCheckedWithFeeInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.WithdrawWithheldTokensFromMint;
    } & ParsedWithdrawWithheldTokensFromMintInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.WithdrawWithheldTokensFromAccounts;
    } & ParsedWithdrawWithheldTokensFromAccountsInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.HarvestWithheldTokensToMint;
    } & ParsedHarvestWithheldTokensToMintInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.SetTransferFee;
    } & ParsedSetTransferFeeInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeConfidentialTransferMint;
    } & ParsedInitializeConfidentialTransferMintInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateConfidentialTransferMint;
    } & ParsedUpdateConfidentialTransferMintInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ConfigureConfidentialTransferAccount;
    } & ParsedConfigureConfidentialTransferAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ApproveConfidentialTransferAccount;
    } & ParsedApproveConfidentialTransferAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.EmptyConfidentialTransferAccount;
    } & ParsedEmptyConfidentialTransferAccountInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ConfidentialDeposit;
    } & ParsedConfidentialDepositInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ConfidentialWithdraw;
    } & ParsedConfidentialWithdrawInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ConfidentialTransfer;
    } & ParsedConfidentialTransferInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ApplyConfidentialPendingBalance;
    } & ParsedApplyConfidentialPendingBalanceInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.EnableConfidentialCredits;
    } & ParsedEnableConfidentialCreditsInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.DisableConfidentialCredits;
    } & ParsedDisableConfidentialCreditsInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.EnableNonConfidentialCredits;
    } & ParsedEnableNonConfidentialCreditsInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.DisableNonConfidentialCredits;
    } & ParsedDisableNonConfidentialCreditsInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.ConfidentialTransferWithFee;
    } & ParsedConfidentialTransferWithFeeInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeDefaultAccountState;
    } & ParsedInitializeDefaultAccountStateInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateDefaultAccountState;
    } & ParsedUpdateDefaultAccountStateInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.Reallocate;
    } & ParsedReallocateInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.EnableMemoTransfers;
    } & ParsedEnableMemoTransfersInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.DisableMemoTransfers;
    } & ParsedDisableMemoTransfersInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeMetadataPointer;
    } & ParsedInitializeMetadataPointerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateMetadataPointer;
    } & ParsedUpdateMetadataPointerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeGroupPointer;
    } & ParsedInitializeGroupPointerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateGroupPointer;
    } & ParsedUpdateGroupPointerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeGroupMemberPointer;
    } & ParsedInitializeGroupMemberPointerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateGroupMemberPointer;
    } & ParsedUpdateGroupMemberPointerInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeTokenMetadata;
    } & ParsedInitializeTokenMetadataInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateTokenMetadataField;
    } & ParsedUpdateTokenMetadataFieldInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.RemoveTokenMetadataKey;
    } & ParsedRemoveTokenMetadataKeyInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.UpdateTokenMetadataUpdateAuthority;
    } & ParsedUpdateTokenMetadataUpdateAuthorityInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.EmitTokenMetadata;
    } & ParsedEmitTokenMetadataInstruction<TProgram>)
  | ({
      instructionType: Token2022Instruction.InitializeTokenGroup;
    } & ParsedInitializeTokenGroupInstruction<TProgram>);
