#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance, force

; 8888 888 8    8888 8b  8    db    8b   d8 8888
; 8www  8  8    8www 8Ybm8   dPYb   8YbmdP8 8www
; 8     8  8    8    8  "8  dPwwYb  8  "  8 8
; 8    888 8888 8888 8   8 dP    Yb 8     8 8888

; Ask for input file name
InputBox, inputFile, VIDEO SOURCE, Enter source filename (name.ext)

fnameArr  := StrSplit(inputFile, ".")       ; Array seperated by dots
fname     := fnameArr[1]                    ; File name
ext       := fnameArr[fnameArr.MaxIndex()]  ; File extension

; 8888 8888 8b   d8 888b. 8888 .d88b
; 8www 8www 8YbmdP8 8  .8 8www 8P www
; 8    8    8  "  8 8wwP' 8    8b  d8
; 8    8    8     8 8     8888 `Y88P'

ffInput             := "ffmpeg -i " fname "." ext A_Space
ffDuration          := "-t 5" A_Space
ffFps               := "-r 30" A_Space
ffAudioNone         :=  "-an" A_Space
ffOutputDest        := "./"

ffMp4Codec          := "-c:v " "libx265" A_Space
ffMp4CodecSpeed     := "-preset veryslow" A_Space
ffMp4Crf            := "-crf 32" A_Space

; DIMENSIONS
dlg := [808, 632, "-lg"]
dmd := [646, 506, "-md"]
dsm := [517, 404, "-sm"]
dxs := [323, 253, "-xs"]

; d = dimensions,
; d[1] = width, d[2] = height
ffResize(d)
{
  return "-vf scale=" d[1] "x" d[2] ":flags=lanczos:force_original_aspect_ratio=increase,crop=" d[1] ":" d[2] A_Space
}

ffMp4(d)
{
  global fname, ffDuration, ffMp4Codec, ffMp4CodecSpeed, ffMp4Crf, ffFps, ffAudioNone
  return ffDuration ffMp4Codec ffMp4CodecSpeed ffMp4Crf ffFps ffAudioNone ffResize(d) fname d[3] ".mp4" A_Space
}

If not ErrorLevel and inputFile and (fnameArr.maxIndex() > 1)
{
  task := ffInput ffMp4(dlg) ffMp4(dmd) ffMp4(dsm) ffMp4(dxs)
  Clipboard := task
  Run "cmder/Cmder.exe"
  Sleep 1000
  Send %task%
}