package com.jiumi.common.exception.file;

import com.jiumi.common.exception.BaseException;

/**
 * 文件信息异常类
 *
 * @author jiumi
 */
public class FileException extends BaseException
{
    private static final long serialVersionUID = 1L;

    public FileException(String code, Object[] args)
    {
        super("file", code, args, null);
    }

}
